import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Demo from './Demo';
import Myintro from './Myintro';
import Final from './Final';
// import Main from './functionalComponents/Main';
// import Parent from './functionalComponents/Parent';
// import Parent from './functionalComponents/Parent1';
import DemoParent from './functionalComponents/DemoParent';
// import Child from './functionalComponents/Child';
import Parent from './ClassComponents/Parent'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />
    <Demo></Demo>
    <Myintro></Myintro>
    <App></App> */}

    {/* <Final></Final> */}
    {/* <Main/>
     */}
     {/* <Parent/> */}
     {/* <Parent/>
      */}
      {/* <Child/> */}
      {/* <Parent/> */}
      {/* <DemoParent/> */}
      <Parent/>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
