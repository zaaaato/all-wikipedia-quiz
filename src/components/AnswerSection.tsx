"use client";

import { useState } from "react";


type Props = {
  answer: string;
  url: string;
};

export const AnswerSection: React.FC<Props> = ({ answer, url }) => {
  const [answerShown, setAnswerShown] = useState(false);
  const [isNewQuizLoading, setIsNewQuizLoading] = useState(false);

  return (
    <div className="mt-8">
      {!answerShown ? (
        <button
          className="btn btn-secondary"
          onClick={() => setAnswerShown(true)}
        >
          答えを見る
        </button>
      ) : (
        <>
          <p className="font-bold">答え: {answer}</p>
          <div className="mt-2">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              ソースを見る
            </a>
          </div>
          <button
            className="mt-8 btn btn-primary"
            disabled={isNewQuizLoading}
            onClick={() => {
              location.href = '/';
            }}
          >
            別の問題に挑戦！
          </button>
        </>
      )}
    </div>
  );
};
