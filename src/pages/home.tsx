import React from 'react';
import { Title, Button, Text } from '../components';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleOnClick = () => navigate('/trivia');

  return (
    <section className="md:w-[600px] md:px-0 px-2 w-full m-auto pt-10 text-center">
      <div className="p-10 bg-neutral-100 rounded-md shadow">
        <Title title="Welcome to the Trivia Challenge!" />
        <Text>You will be presented with 10 True or False questions.</Text>
        <Text>Can you score 100%?</Text>
        <Button text="Start" onClick={handleOnClick} />
      </div>
    </section>
  );
};

export default Home;
