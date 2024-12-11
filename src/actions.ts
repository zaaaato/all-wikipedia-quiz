"use server";

import parse from "node-html-parser";
import { groq } from "./groq";
import { cleanArticleContent } from "./utils/cleanArticleContent";

export const generateQuiz = async (): Promise<{
  question: string;
  answer: string;
  url: string;
}> => {
  try {
    const res = await fetch("https://ja.wikipedia.org/wiki/Special:Randompage");
    const randomArticle = await res.text();
    const url = res.url;

    const root = parse(randomArticle);
    const titleElemId = "firstHeading";
    const articleBodyElemId = "bodyContent";
    const title = root.getElementById(titleElemId)?.text;
    const content = cleanArticleContent(
      root.getElementById(articleBodyElemId)!.text
    ).slice(0, 5000);

    const prompt = `
  あなたは優秀なクイズ作家です。以下の記事からクイズを作成してください。
  タイトル「${title}」
  ${content}

  作成にあたっては以下のルールに絶対に従うようにしてください。
  1. クイズは一つだけ作成してください。
  2. クイズの問題文と正答は必ず日本語で記述してください。
  3. クイズの内容はなるべくタイトルとなっている物、人物、出来事を主軸にしたものにしてください。
  4. 可能であればクイズの問題文はなるべく情報を多く含むようにしてください。
  5. 作成したクイズは以下のjson形式で渡すようにしてください。
  {
    "question": "問題文",
    "answer": "正答"
  }
  `;
    const quizJSON = await groq.chat.completions
      .create({
        messages: [{ role: "user", content: prompt }],
        model: "llama-3.3-70b-versatile",
        response_format: { type: "json_object" },
      })
      .then((completion) => completion.choices[0].message.content);

    const quiz = quizJSON
      ? (JSON.parse(quizJSON) as {
          question: string;
          answer: string;
        })
      : null;

    if (!quiz) throw new Error("Failed to generate quiz");

    return {
      ...quiz,
      url,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to generate quiz");
  }
};
