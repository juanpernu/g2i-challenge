import { Title, Button, Text } from '../commons';
import { IQuestion } from '../../types';
import { formattQuestion } from '../../utils';

interface Props {
  question: IQuestion;
  onClick: (answer: string) => void;
}

export const Question = ({ question, onClick }: Props) => {
  return (
    <div className="p-10 bg-neutral-100 rounded-md shadow">
      <Title title={question.category} />
      <Text>{formattQuestion(question.question)}</Text>
      <div className="grid grid-cols-2 gap-4 mt-8">
        <Button text="True" onClick={() => onClick('True')} />
        <Button text="False" onClick={() => onClick('False')} />
      </div>
    </div>
  );
};
