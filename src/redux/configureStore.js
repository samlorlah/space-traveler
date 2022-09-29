import {
  configureStore,
  combineReducers,
} from '@reduxjs/toolkit';

import rocketsReducer from './rockets/rockets';

const rootReducer = combineReducers({
  rocketsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
