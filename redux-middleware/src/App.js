import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getAllPosts } from './store/reducers/posts-slice';

import CounterPage from './pages/CounterPage';

const App = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getAllPosts(11));
  // }, [dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CounterPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
