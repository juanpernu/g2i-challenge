import React, { useEffect } from 'react';
import { useSelector, useDispatch } from '../hooks';
import { selectTrivia, fetchQuestions } from '../reducers/trivia';
import { Loading, Title } from '../components';

const Trivia: React.FC = () => {
  const dispatch = useDispatch();
  const trivia = useSelector(selectTrivia);

  console.log(trivia);

  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);

  return (
    <section className="md:w-1/2 md:px-0 px-2 w-full m-auto">
      {trivia.loading && <Loading />}
      <p className="text-red-500">Hola</p>
      {Array.isArray(trivia.questions) &&
        trivia.questions.map((t: any, i: number) => (
          <Title key={i} title={t.category} />
        ))}
    </section>
  );
};

export default Trivia;
