import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { plus, miss } from '../store/reducers/counter';

const CounterPage = () => {
  const { number } = useSelector((state) => state.counter);

  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(plus());
  };
  return (
    <>
      <div>{number}</div>
      <button onClick={onClick}>+1</button>
      <button>-1</button>
    </>
  );
};
export default React.memo(CounterPage);
