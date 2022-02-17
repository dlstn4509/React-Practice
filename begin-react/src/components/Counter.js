import React, { useState, useEffect, useCallback, useMemo, useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'plus':
      return state + 1;
    case 'miss':
      return state - 1;
    default:
      return state;
  }
};

const Counter = () => {
  const [number, dispatch] = useReducer(reducer, 0);

  const onPlus = () => {
    dispatch({ type: 'plus' });
  };
  const onMiss = () => {
    dispatch({ type: 'miss' });
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onPlus}>+1</button>
      <button onClick={onMiss}>-1</button>
    </div>
  );
};

export default Counter;
