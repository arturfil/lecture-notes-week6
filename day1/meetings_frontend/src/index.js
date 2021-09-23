import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import App2 from './App2';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';
import MeetingsProvider from './context/MeetingsContext';
import AuthProvider from './context/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <MeetingsProvider>
      <AuthProvider>
        <App/>
      </AuthProvider>
    </MeetingsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
