import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FirstApp3 from './FirstApp3';
import FirstApp2 from './FirstApp2';
import { ComponentApp } from './ComponentApp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ComponentApp />
    <FirstApp3 p = {10} />
    <FirstApp2 title = "My First App" />
     <App /> 
  </React.StrictMode>
);

