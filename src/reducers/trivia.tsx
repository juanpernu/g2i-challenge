import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getQuestions } from '../services';
import type { RootState } from '../store';
import { ITriviaState } from '../types';

const initialState = {
  questions: [],
  loading: false,
  answers: []
};

export const fetchQuestions = createAsyncThunk(
  'trivia/fetchQuestions',
  async () => {
    const {
      data: { results }
    } = await getQuestions();
    return results;
  }
);

export const triviaSlice = createSlice({
  name: 'trivia',
  initialState: initialState as ITriviaState,
  reducers: {
    setAnswer: (state, action: PayloadAction<string>) => {
      state.answers.push(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      state.loading = false;
      state.questions = action.payload;
    });
    builder.addCase(fetchQuestions.rejected, (state) => {
      state.loading = false;
      state.questions = [];
    });
  }
});

export const { setAnswer } = triviaSlice.actions;

export const selectTrivia = (state: RootState) => state.trivia;

export default triviaSlice.reducer;
