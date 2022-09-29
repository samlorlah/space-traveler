import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API = 'https://api.spacexdata.com/v3/missions';

export const fetchMission = createAsyncThunk('fetch-data', async () => {
  const response = await axios.get(API);
  const data = await response.data;
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
  loading: false,
};
const missions = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission(state, action) {
      // eslint-disable-next-line max-len
      console.log(state.missions);
      state.missions.find((mission) => (mission.id === action.payload.id
        ? { ...mission, joined: true }
        : mission));
      console.log(state.missions);
    },
  },
  extraReducers: {
    [fetchMission.pending]: (state) => {
    // eslint-disable-next-line no-param-reassign
      state.loading = true;
    },
    [fetchMission.fulfilled]: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.loading = false;
      // eslint-disable-next-line no-param-reassign
      state.missions = action.payload;
    },
  },
});

export const { actions } = missions;
export default missions.reducer;
