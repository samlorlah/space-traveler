import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import missionReducers from './mission/missions';
import rocketsReducer from './rockets/rockets';

const store = configureStore(
  {
    reducer: {
      missions: missionReducers,
      rockets: rocketsReducer,
    },
  },
  applyMiddleware(logger),
);

export default store;
