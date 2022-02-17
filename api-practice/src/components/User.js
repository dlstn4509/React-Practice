import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { useUsersState, useUsersDispatch, getUser } from '../context/UsersContext';

const User = ({ userId }) => {
  const state = useUsersState();
  const dispatch = useUsersDispatch();

  useEffect(() => {
    getUser(dispatch, userId);
  }, [dispatch, userId]);

  const { data: user, loading, error } = state.user;

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>{error}</div>;
  if (!user) return null;

  return (
    <div>
      <h2>{user.username}</h2>
      <p>
        <b>Email:</b> {user.email}
      </p>
    </div>
  );
};

export default React.memo(User);
