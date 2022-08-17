import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from '../hooks';
import { selectTrivia, fetchQuestions, setAnswer } from '../reducers/trivia';
import { Loading, Question } from '../components';

const Trivia: React.FC = () => {
  const [questionCounter, setQuestionCounter] = useState<number>(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const trivia = useSelector(selectTrivia);

  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);

  function handleOnClick(answer: string) {
    dispatch(setAnswer(answer));
    if (questionCounter < trivia.questions.length - 1) {
      setQuestionCounter(questionCounter + 1);
    } else {
      navigate('/answers');
    }
  }

  const hasTrivias = Array.isArray(trivia.questions) && trivia.questions.length;

  return (
    <section className="md:w-[600px] md:px-0 px-2 w-full m-auto pt-10">
      {trivia.loading && <Loading />}
      {hasTrivias ? (
        <Question
          question={trivia.questions[questionCounter]}
          onClick={handleOnClick}
        />
      ) : (
        <p className="flex justify-center text-slate-600 text-base mt-2">
          Ups! There is no trivia
        </p>
      )}
    </section>
  );
};

export default Trivia;
