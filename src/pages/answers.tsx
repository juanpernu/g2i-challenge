import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Title, Button, Answer, Text } from '../components';
import { useSelector } from '../hooks';
import { selectTrivia } from '../reducers/trivia';

const Answers: React.FC = () => {
  const trivia = useSelector(selectTrivia);
  const navigate = useNavigate();

  useEffect(() => {
    if (!trivia.answers.length) {
      navigate('/');
    }
  }, []);

  const handleOnClick = () => navigate('/');

  const correctAnswers = trivia.questions.filter(
    (t, i) => t.correct_answer === trivia.answers[i]
  ).length;

  return (
    <section className="md:w-[600px] md:px-0 px-2 w-full m-auto pt-10 text-center">
      <div className="p-10 bg-neutral-100 rounded-md shadow">
        <Title title="You scored" />
        <Text>{`${correctAnswers}/${trivia.questions.length}`}</Text>
        {trivia.questions.map((t, i) => (
          <Answer key={i} trivia={t} answer={trivia.answers[i]} />
        ))}
        <Button text="Play again" onClick={handleOnClick} />
      </div>
    </section>
  );
};

export default Answers;
