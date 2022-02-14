import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';

const List = ({ lists }) => {
  return (
    <ul className="list-wrapper">
      {lists.map((v, i) => (
        <li key={i}>
          <img src={v.image_url} alt="img" className="w-100" />
        </li>
      ))}
    </ul>
  );
};

export default React.memo(List);
