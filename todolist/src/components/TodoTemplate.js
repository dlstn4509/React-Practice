import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import styled from 'styled-components';

const TodoTemplateWrapper = styled.div`
  width: 512px;
  height: 768px;
  position: relative;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  margin: 0 auto;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

const TodoTemplate = ({ children }) => {
  return <TodoTemplateWrapper>{children}</TodoTemplateWrapper>;
};

export default React.memo(TodoTemplate);
