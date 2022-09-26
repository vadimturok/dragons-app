import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import './index.css'
import {Provider} from "react-redux";
import {store} from './store'
import Layout from "./components/Layout/Layout";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <Layout>
                <App />
            </Layout>
        </Provider>
    </BrowserRouter>
);

