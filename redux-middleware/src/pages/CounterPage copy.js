import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Counter from '../components/Counter';
import { getAllPosts } from '../store/reducers/posts-slice';

const CounterPage = () => {
  const { number } = useSelector((state) => state.counter);
  const { allPosts } = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  // const onIncrease = () => dispatch(increase());
  // const onDecrease = () => dispatch(decrease());
  const onIncrease = () => dispatch(increaseAsync());
  const onDecrease = () => dispatch(decreaseAsync());
  const onAsync = (id) => dispatch(getAllPosts(id));
  return (
    <Counter
      number={number}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onAsync={onAsync}
      allPosts={allPosts}
    />
  );
};

export default CounterPage;
