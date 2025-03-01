import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './components/App/App';
import { BrowserRouter as RouterEngine } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterEngine>
        <App />
    </RouterEngine>
);