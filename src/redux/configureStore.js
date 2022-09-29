import {
  configureStore,
  combineReducers,
} from '@reduxjs/toolkit';
import missionsReducers from './mission/missions';
import rocketsReducer from './rockets/rockets';

const rootReducer = combineReducers({
  rocketsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  missions: missionsReducers,
});

export default store;
