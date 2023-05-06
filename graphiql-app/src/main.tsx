import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import '../firebase';
import { AuthProvider } from './components/AuthProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <AuthProvider> */}
      <Provider store={store}>
        <App />
      </Provider>
      {/* </AuthProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);
