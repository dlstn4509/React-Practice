import React from 'react';

import Asd from './Asd';

const Counter = ({ number, onPlus, onMiss }) => {
  return (
    <>
      <div>{number}</div>
      <button onClick={onPlus}>plus</button>
      <button onClick={onMiss}>miss</button>
    </>
  );
};

export default React.memo(Counter);
