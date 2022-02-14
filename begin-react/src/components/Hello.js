import React from 'react';

const Hello = (props) => {
  const { name, color, isShow } = props;
  return (
    <>
      <div>안녕하세요</div>
      <div>{isShow ? <b>*</b> : null}</div>
      <div style={{ color: color }}>{name}</div>
    </>
  );
};

export default Hello;
