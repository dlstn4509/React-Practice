export const createAsyncDispatcher = (type, promiseFn) => {
  const SUCCESS = `${type}_SUCCESS`;
  const ERROR = `${type}_ERROR`;

  const actionHandler = async (dispatch, ...rest) => {
    dispatch({ type });
    try {
      const data = await promiseFn(...rest);
      dispatch({
        type: SUCCESS,
        data,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        error,
      });
    }
  };
  return actionHandler;
};
