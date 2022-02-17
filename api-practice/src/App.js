import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import styled from 'styled-components';
import Users from './components/Users';

const App = () => {
  return <Users />;
};

export default React.memo(App);
