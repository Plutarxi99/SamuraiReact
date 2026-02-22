import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
    {id: 1, message: 'Борщ', likesCount: 14},
    {id: 2, message: 'Гороховый суп', likesCount: 12},
    {id: 3, message: 'Суп из 7 залуп', likesCount: 123},
];

let dialogsData = [
    {id: 1, name: "Dimich"},
    {id: 2, name: "Sveta"},
    {id: 3, name: "Sasha"},
    {id: 4, name: "Viktor"},
    {id: 5, name: "Valera"},
    {id: 6, name: "Katya"},
    {id: 7, name: "Andrey"},
    {id: 8, name: "Masha"},
    {id: 9, name: "Igor"},
    {id: 10, name: "Nina"},
];

let messagesData = [
    {id: 1, name: "Hello World!"},
    {id: 2, name: "Hi"},
    {id: 3, name: "Blyaa"},
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
