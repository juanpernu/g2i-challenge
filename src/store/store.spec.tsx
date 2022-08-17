import { AnyAction, configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { ThunkMiddleware } from 'redux-thunk';
import triviaSlice, { fetchQuestions } from '../reducers/trivia';
import { ITriviaState, IQuestion } from '../types';

describe('Store', () => {
  const trivias = {
    questions: [],
    loading: false,
    answers: [],
    error: false
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

  let store: EnhancedStore<
    { trivias: ITriviaState },
    AnyAction,
    [
      | ThunkMiddleware<{ trivias: ITriviaState }, AnyAction, null>
      | ThunkMiddleware<{ trivias: ITriviaState }, AnyAction, undefined>
    ]
  >;

  beforeAll(() => {
    store = configureStore({
      reducer: {
        trivias: triviaSlice
      },
      preloadedState: { trivias }
    });
  });
  afterAll(() => undefined);

  it('should display results when necessary data is provided', () => {
    const actions = [
      {
        type: fetchQuestions.fulfilled.type,
        payload: [...questionResponse]
      }
    ];
    actions.forEach((action) => store.dispatch(action));

    const actual = store.getState();
    const expected = {
      trivias: {
        questions: questionResponse,
        loading: false,
        answers: [],
        error: false
      }
    };

    expect(actual).toEqual(expected);
  });
});
