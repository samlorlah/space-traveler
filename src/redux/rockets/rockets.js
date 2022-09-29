import axios from 'axios';

const FETCH_ROCKETS = 'space/rocket/fetch_rockets';
const ERROR_ROCKET = 'space/rocket/error_rockets';
const BASE_URL = 'https://api.spacexdata.com/v3/rockets';

const initialState = {
  rockets: [],
  error: null
}

export const fetchingRockets = () => {
  async (dispatch) => {
    await axios.get(BASE_URL)
    .then(
      (response) =>  {
        dispatch({
          type: FETCH_ROCKETS,
          payload: response.data
        })
        return response.data;
      }
    )
    .catch((err) => dispatch({
      type: ERROR_ROCKET,
      payload: err
    }))
  }
}

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESSFUL_ROCKET:
      return {
        ...state,
        rockets: action.dispatch.payload,
        error: null
      }
    
    case ERROR_ROCKET:
      return {
       ...state,
       rockets: [],
        error: action.display.payload
      }
  }
}

export default rocketsReducer;
