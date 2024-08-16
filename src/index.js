import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from './context/context';

// import Login from './page/login';
// import Signup from './page/signup';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>
)



