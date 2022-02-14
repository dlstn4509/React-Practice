import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';

const Title = ({ title, subTitle }) => {
  return (
    <div className="title-wrapper">
      <h1 className="title">
        {title} / {subTitle}
      </h1>
    </div>
  );
};

export default React.memo(Title);
