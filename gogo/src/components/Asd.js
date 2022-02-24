import React from 'react';

const Asd = ({ number }) => {
  return (
    <>
      <div>{number}</div>
    </>
  );
};

export default React.memo(Asd);
