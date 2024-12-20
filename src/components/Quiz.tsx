import { generateQuiz } from "@/actions";
import { AnswerSection } from "./AnswerSection";
import { redirect } from "next/navigation";

export const Quiz: React.FC = async () => {
  const quiz = await generateQuiz();

  return (
    <div className="w-full">
      <div className="p-4 bg-base-300 shadow-base-content rounded-lg">
        <p className="text-lg font-bold">
          {"<Q.>"}
          <br />
          {quiz.question}
        </p>
      </div>
      <AnswerSection answer={quiz.answer} url={quiz.url} />
    </div>
  );
};
