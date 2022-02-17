import React, { useState, useEffect, useCallback, useMemo, useRef, useReducer } from 'react';
import { useUsersState, useUsersDispatch, getUsers } from '../context/UsersContext';

import User from './User';

const Users = () => {
  const [userId, setUserId] = useState(null);
  const state = useUsersState();
  const dispatch = useUsersDispatch();

  const { data: users, loading, error } = state.users;

  const fetchData = () => {
    getUsers(dispatch);
  };

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러발생</div>;
  if (!users) return <button onClick={fetchData}>불러오기</button>;

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
        {userId}
      </ul>
      <button onClick={fetchData}>다시 조회</button>
      {userId && <User userId={userId} />}
    </>
  );
};

export default React.memo(Users);
