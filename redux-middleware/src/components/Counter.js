import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllPosts } from '../store/reducers/posts-slice';

const Counter = ({ number, onIncrease, onDecrease, onAsync, allPosts }) => {
  // const dispatch = useDispatch();
  const onClick = () => {
    // dispatch(getAllPosts(22));
    onAsync(33);
    console.log(allPosts);
  };
  return (
    <div>
      <h1>{number}</h1>
      <h1>{JSON.stringify(allPosts.data)}</h1>
      <h1>{typeof allPosts}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={onClick}>조회</button>
    </div>
  );
};

export default React.memo(Counter);
