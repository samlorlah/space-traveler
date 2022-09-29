/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API = 'https://api.spacexdata.com/v3/missions';

export const fetchMission = createAsyncThunk('fetch-data', async () => {
  const response = await axios.get(API);
  const { data } = response;
  const mission = data.map((object) => ({
    id: object.mission_id,
    name: object.mission_name,
    description: object.description,
    joined: false,
  }));
  return mission;
});

const initialState = {
  missions: [],
  loading: 'idle',
};
const missions = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission(state, action) {
      console.log(action);
      // eslint-disable-next-line max-len
      state.missions = state.missions.map((obj) => {
        if (obj.id === action.payload) {
          obj.joined = true;
          return obj;
        }
        return obj;
      });
      return state;
    },
    leaveMission(state, action) {
      console.log(action);
      // eslint-disable-next-line max-len
      state.missions = state.missions.map((obj) => {
        if (obj.id === action.payload) {
          obj.joined = false;
          return obj;
        }
        return obj;
      });
      return state;
    },
  },
  extraReducers: {
    [fetchMission.fulfilled]: (state, action) => {
      console.log(action);
      state.missions = action.payload;
      state.loading = 'success';
    },
  },
});

export const { actions } = missions;
export default missions.reducer;
