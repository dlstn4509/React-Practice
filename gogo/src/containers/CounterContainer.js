import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { plus, miss } from '../store/reducers/counter';

import Counter from '../components/Counter';
import Asd from '../components/Asd';

const CounterContainer = () => {
  const { number } = useSelector((state) => ({
    number: state.counter.number,
  }));
  const dispatch = useDispatch();
  const onPlus = () => dispatch(plus());
  const onMiss = () => dispatch(miss());

  return (
    <>
      <Counter number={number} onPlus={onPlus} onMiss={onMiss} />
      <Asd number={number} />
    </>
  );
};

export default CounterContainer;
