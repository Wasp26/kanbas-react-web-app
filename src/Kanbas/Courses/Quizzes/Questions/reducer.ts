import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [] as any[]
};

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    addQuestion: (state, action) => {
      state.questions.push(action.payload);
    },
    updateQuestion: (state, action) => {
      const { id, updates } = action.payload;
      const index = state.questions.findIndex((q: any) => q.id === id);
      if (index !== -1) {
        state.questions[index] = { ...state.questions[index], ...updates };
      }
    },
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
    deleteQuestion: (state, action) => {
      state.questions = state.questions.filter((q: any) => q.id !== action.payload);
    }
  }
  
});

export const { addQuestion, updateQuestion, setQuestions, deleteQuestion } = questionsSlice.actions;
export default questionsSlice.reducer;
