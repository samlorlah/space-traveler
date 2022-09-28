import { configureStore } from '@reduxjs/toolkit';
import missionsReducers from './mission/missions';

const store = configureStore({
  reducer: {
    missions: missionsReducers,
  },
});

export default store;
