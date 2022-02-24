const PLUS = 'counter/PLUS';
const MISS = 'counter/MISS';

export const plus = () => ({ type: PLUS });
export const miss = () => ({ type: MISS });

const initialState = {
  number: 0,
};

export const counter = (state = initialState, action) => {
  switch (action.type) {
    case PLUS:
      return {
        ...state,
        number: state.number + 1,
      };
    case MISS:
      return {
        ...state,
        number: state.number - 1,
      };
    default:
      return state;
  }
};
