import {
  LIST_REQUEST,
  LIST_SUCCESS,
  LIST_FAILURE
} from '../actions';

const initialState =  {
  isFetching: false,
  items: [],
  error: null
};

const list = (state = initialState, action) => {
  switch (action.type) {
    case LIST_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case LIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.data
      };

    case LIST_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };

    default:
      return state;
  }
};

export default list;