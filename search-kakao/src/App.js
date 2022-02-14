import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import axios from 'axios';
import Title from './components/Title';
import Search from './components/Search';
import Lists from './components/Lists';

const kakaoURL = 'https://dapi.kakao.com/v2/search/image';
const kakaoKey = 'KakaoAK accdfd5267af756d07efcd007e13bcee';
const kakaoParams = {
  params: { size: 50 },
  headers: { Authorization: kakaoKey },
};
const headerTitle = '검색기';
const subTitle = 'kakao search';

const App = () => {
  const [allPhoto, setAllPhoto] = useState([]);
  const changeQuery = useCallback(async (value) => {
    try {
      kakaoParams.params.query = value;
      const { data } = await axios.get(kakaoURL, kakaoParams);
      console.log(data.documents);
      setAllPhoto(data.documents);
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div className="container">
      <Title title={headerTitle} subTitle={subTitle} />
      <Search changeQuery={changeQuery} />
      <Lists lists={allPhoto} />
    </div>
  );
};

export default App;
