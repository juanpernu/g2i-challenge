import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';
import { getQuestions } from '../services';
import type { RootState } from '../store';

interface TriviaState {
  questions: Array<[]>;
  loading: boolean;
}

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
  initialState: initialState as TriviaState,
  reducers: {},
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

export const selectTrivia = (state: RootState) => state.trivia;

export default triviaSlice.reducer;
