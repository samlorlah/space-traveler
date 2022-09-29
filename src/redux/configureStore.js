import { configureStore } from '@reduxjs/toolkit';
import missionReducers from './mission/missions';
import rocketsReducer from './rockets/rockets';

const store = configureStore({
  reducer: {
    missions: missionReducers,
    rockets: rocketsReducer,
  },
});

export default store;
