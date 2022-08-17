import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/solid';

import { Text } from '../commons';
import { IQuestion } from '../../types';
import { formattQuestion } from '../../utils';

interface Props {
  trivia: IQuestion;
  answer: string;
}

export const Answer = ({ trivia, answer }: Props) => {
  const isCorrect = trivia.correct_answer === answer;

  const answerCss = isCorrect
    ? 'mb-2 flex flex-col items-center p-4 bg-green-100'
    : 'mb-2 flex flex-col items-center p-4 bg-red-100';

  return (
    <div className={answerCss}>
      {isCorrect ? (
        <CheckCircleIcon className="h-5 w-5 text-green-500" />
      ) : (
        <XCircleIcon className="h-5 w-5 text-red-500" />
      )}
      <Text>{formattQuestion(trivia.question)}</Text>
    </div>
  );
};
