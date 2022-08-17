import reducer, { fetchQuestions, initialState } from './trivia';
import { IQuestion } from '../types';

describe('Reducers::Trivia', () => {
  const getInitialState = () => {
    return initialState;
  };

  const questionResponse: IQuestion[] = [
    {
      category: 'History',
      correct_answer: 'True',
      difficulty: 'hard',
      incorrect_answers: ['False'],
      question: 'Japan was part of the Allied Powers during World War I.',
      type: 'boolean'
    }
  ];

  const questions = {
    questions: [],
    loading: false,
    answers: [],
    error: false
  };

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();

    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should handle fetchQuestions.pending', () => {
    const appState = questions;
    const action = { type: fetchQuestions.pending };

    const expected = {
      ...questions,
      loading: true
    };

    expect(reducer(appState, action)).toEqual(expected);
  });

  it('should handle fetchQuestions.fulfilled', () => {
    const appState = questions;
    const action = {
      type: fetchQuestions.fulfilled,
      payload: { results: questionResponse }
    };

    const expected = {
      ...questions,
      questions: action.payload,
      loading: false
    };

    expect(reducer(appState, action)).toEqual(expected);
  });

  it('should handle fetchQuestions.rejected', () => {
    const appState = questions;
    const action = { type: fetchQuestions.rejected };

    const expected = {
      ...questions,
      loading: false,
      error: true
    };

    expect(reducer(appState, action)).toEqual(expected);
  });
});
