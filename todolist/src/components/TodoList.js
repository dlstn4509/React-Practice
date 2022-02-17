import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import styled from 'styled-components';
import { useTodoState } from '../reducer/TodoContext';

import TodoItem from './TodoItem';

const TodoListWrapper = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const TodoList = () => {
  const todos = useTodoState();
  return (
    <TodoListWrapper>
      {todos.map((v) => (
        <TodoItem key={v.id} id={v.id} text={v.text} done={v.done} />
      ))}
    </TodoListWrapper>
  );
};

export default React.memo(TodoList);
