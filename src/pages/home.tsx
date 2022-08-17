import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleOnClick = () => navigate('/trivia');

  return (
    <section className="md:w-1/2 md:px-0 px-2 w-full m-auto">
      <p className="text-red-500">Welcome to the trivia challenge</p>
      <button onClick={handleOnClick} className="text-red-500">
        Start
      </button>
    </section>
  );
};

export default Home;
