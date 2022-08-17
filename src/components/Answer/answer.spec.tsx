import { create } from 'react-test-renderer';
import { Answer } from './index';

describe('<Question />', () => {
  const Mock = {
    question: {
      category: 'Test question',
      question: 'Is this a test question?',
      correct_answer: 'True',
      difficulty: 'hard',
      incorrect_answers: ['False'],
      type: 'boolean'
    },
    answer: 'True'
  };

  it('should match snapshot', () => {
    const component = create(
      <Answer trivia={Mock.question} answer={Mock.answer} />
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
