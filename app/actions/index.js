import getList from '../api';

export const LIST_REQUEST = 'LIST_REQUEST';
export const LIST_SUCCESS = 'LIST_SUCCESS';
export const LIST_FAILURE = 'LIST_FAILURE';

export const fetchList = () => dispatch => {
  dispatch({
    type: LIST_REQUEST,
  });

  return getList()
    .then(
      data => (
        dispatch({
          data,
          type: LIST_SUCCESS
        })
      ),
      error => (
        dispatch({
          error,
          type: LIST_FAILURE
        })
      ),
    );
};
