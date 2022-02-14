import React, { useRef, useState, useMemo, useCallback } from 'react';
import Hello from './components/Hello';
import Wrapper from './components/Wrapper';
import Counter from './components/Counter';
import InputSample from './components/InputSample';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';
import './App.css';

const App = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const { username, email } = inputs;

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  }, []);

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true,
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false,
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false,
    },
  ]);
  const nextId = useRef(4);
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers((users) => {
      user.concat(users);
    });
    setInputs({
      username: '',
      email: '',
    });
    nextId.current += 1;
  }, [username, email]);

  const onRemove = useCallback((id) => {
    setUsers((users) => {
      users.filter((user) => user.id !== id);
    });
  }, []);

  const onToggle = useCallback((id) => {
    setUsers((users) => {
      users.map((user) => (user.id === id ? { ...user, active: !user.active } : user));
    });
  }, []);

  const countActiveUser = (users) => {
    console.log('active user 세는 중');
    return users.filter((user) => user.active).length;
  };

  const count = useMemo(() => countActiveUser(users), [users]);

  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성사용자수 : {count}</div>
    </>
  );
};

export default App;
