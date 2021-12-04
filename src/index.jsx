import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from '../src/context/GetData';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Provider>
                <App />
            </Provider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
