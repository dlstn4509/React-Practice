import React, { useState, useEffect, useCallback, useMemo, useRef, useReducer } from 'react';
import styled from 'styled-components';
import { useAsync } from 'react-async';
import axios from 'axios';

import User from './User';

const getUsers = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
  return data;
};

const Users = () => {
  const [userId, setUserId] = useState(null);

  const {
    data: users,
    error,
    isLoading,
    // reload, // 시작부터 렌더링 (reload)
    run, // 눌러야 렌더링 (run)
  } = useAsync({
    // promiseFn: getUsers, // 시작부터 렌더링 (reload)
    deferFn: getUsers, // 눌러야 렌더링 (run)
  });

  if (isLoading) return <div>로딩중...</div>;
  if (error) return <div>에러발생</div>;
  // if (!users) return <button onClick={reload}>불러오기</button>;// 시작부터 렌더링 (reload)
  if (!users) return <button onClick={run}>불러오기</button>; // 눌러야 렌더링 (run)

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
      {/* <button onClick={reload}>다시 조회</button> */}
      <button onClick={run}>다시 조회</button>
      {userId && <User userId={userId} />}
    </>
  );
};

export default React.memo(Users);
