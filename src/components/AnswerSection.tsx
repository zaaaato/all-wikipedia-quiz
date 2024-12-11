"use client";

import { use, useEffect, useState } from "react";

type Props = {
  answer: string;
  url: string;
  reload: () => Promise<void>;
};

export const AnswerSection: React.FC<Props> = ({ answer, url, reload }) => {
  const [answerShown, setAnswerShown] = useState(false);
  const [isNewQuizLoading, setIsNewQuizLoading] = useState(false);

  useEffect(() => {
    setIsNewQuizLoading(false);
  }, [answer]);

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
              setIsNewQuizLoading(true);
              reload();
            }}
          >
            別の問題に挑戦！
          </button>
        </>
      )}
    </div>
  );
};
