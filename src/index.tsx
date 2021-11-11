import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { ToastContainer } from 'react-toastify';
// import App from './App';
import { store } from './app/store';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="bg-red-300 h-screen">Homer Index</div>
      {/* <App />
      <ToastContainer /> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
