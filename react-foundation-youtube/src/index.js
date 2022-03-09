import React from 'react';
import ReactDOM from 'react-dom';
import Part1 from './1.Part1/Part1';

import App from "./App.js";
import "./index.css";

// index.js에서 파일이 시작한다.
// 모든 js 파일은 모듈이다.
// Part1 : #1 ~ #9

// npm install react-router-dom : 라우터 설치

ReactDOM.render(
  <div>
    {/* <Part1 /> */}

    <App />
  </div>,
  document.getElementById('root')
);