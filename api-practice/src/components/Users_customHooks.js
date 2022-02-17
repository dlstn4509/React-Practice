import React, { useState, useEffect, useCallback, useMemo, useRef, useReducer } from 'react';
import styled from 'styled-components';
import useAsync from '../customHooks/UseAsync';
import axios from 'axios';

import User from './User_customHooks';

const getUsers = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
  return data;
};

const Users = () => {
  const [userId, setUserId] = useState(null);

  const [state, refetch] = useAsync(getUsers, [], true);
  const { loading, data: users, error } = state;

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러발생</div>;
  if (!users) return <button onClick={refetch}>불러오기</button>;

  return (
    <>
      <ul>
        {users.map((v) => (
          <li
            key={v.id}
            onClick={() => {
              setUserId(v.id);
            }}
            style={{ cursor: 'pointer' }}
          >
            {v.username} / {v.name}
          </li>
        ))}
      </ul>
      <button onClick={refetch}>다시 조회</button>
      {userId && <User userId={userId} />}
    </>
  );
};

export default React.memo(Users);
