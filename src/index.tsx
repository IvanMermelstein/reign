import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Body from './components/Body/Body';
import AppContext from './context/AppContext';
import './index.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
root.render(
    <React.StrictMode>
        <AppContext>
            <Body>
                <App />
            </Body>
        </AppContext>
    </React.StrictMode>,
);
