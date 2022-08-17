import { create } from 'react-test-renderer';
import { Question } from './index';

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
    onClick: jest.fn()
  };

  it('should match snapshot', () => {
    const component = create(
      <Question question={Mock.question} onClick={Mock.onClick} />
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
