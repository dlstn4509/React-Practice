import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';

const Search = ({ changeQuery }) => {
  const placeholder = '검색어';
  const queryRef = useRef(null);
  const [query, setQuery] = useState('');
  const onChange = useCallback((e) => {
    setQuery(e.target.value);
  }, []);
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      changeQuery(queryRef.current.value);
    },
    [changeQuery]
  );

  return (
    <form className="search-wrapper" onSubmit={onSubmit}>
      <div className="search-wrap mr-3">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder={placeholder}
          autoFocus
          name="query"
          ref={queryRef}
          onChange={onChange}
          value={query}
        />
      </div>
      <button className="btn btn-primary">검색</button>
    </form>
  );
};

export default React.memo(Search);
