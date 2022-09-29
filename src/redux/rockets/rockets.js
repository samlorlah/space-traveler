import axios from 'axios';

const FETCH_ROCKETS = 'space/rocket/fetch_rockets';
const ERROR_ROCKET = 'space/rocket/error_rockets';
const LOAD_ROCKET = 'space/rocket/load_rockets';
const RESERVE_ROCKET = 'space/rocket/reserve_rockets';
const CANCEL_RESERVE_ROCKET = 'space/rocket/cancel_reserve_rockets';
const BASE_URL = 'https://api.spacexdata.com/v3/rockets';

const initialState = {
  loading: false,
  rockets: [],
  error: null,
};

export const loadingRockets = () => ({ type: LOAD_ROCKET });

export const fetchingRockets = () => (
  async (dispatch) => {
    loadingRockets();
    try {
      const response = await axios.get(BASE_URL);
      const { data } = response;
      const newRocketData = data.map((rocket) => ({
        id: rocket.id,
        name: rocket.rocket_name,
        description: rocket.description,
        img: rocket.flickr_images[0],
        reserved: false,
      }));
      return dispatch({
        type: FETCH_ROCKETS,
        payload: newRocketData,
      });
    } catch (error) {
      return dispatch({
        type: ERROR_ROCKET,
        payload: error,
      });
    }
  }
);

export const reserveRocket = (id) => ({
  type: RESERVE_ROCKET,
  id,
});

export const cancelReservation = (id) => ({
  type: CANCEL_RESERVE_ROCKET,
  id,
});

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return {
        ...state,
        loading: false,
        rockets: action.payload,
        error: null,
      };

    case ERROR_ROCKET:
      return {
        loading: false,
        ...state,
        rockets: [],
        error: action.error,
      };
    case LOAD_ROCKET:
      return {
        ...state,
        loading: true,
      };
    case RESERVE_ROCKET:
      return {
        ...state,
        rockets: state.rockets.map((rocket) => {
          if (rocket.id === action.id) {
            return { ...rocket, reserved: true };
          }
          return rocket;
        }),
      };
    case CANCEL_RESERVE_ROCKET:
      return {
        ...state,
        rockets: state.rockets.map((rocket) => {
          if (rocket.id === action.id) {
            return { ...rocket, reserved: false };
          }
          return rocket;
        }),
      };
    default:
      return state;
  }
};

export default rocketsReducer;
