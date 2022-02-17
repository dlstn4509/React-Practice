import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useAsync } from 'react-async';

const getUser = async ({ id }) => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  return data;
};

const User = ({ userId }) => {
  const {
    data: user,
    error,
    isLoading,
  } = useAsync({
    promiseFn: getUser,
    userId,
    watch: userId,
  });

  if (isLoading) return <div>로딩중...</div>;
  if (error) return <div>에러발생</div>;
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
