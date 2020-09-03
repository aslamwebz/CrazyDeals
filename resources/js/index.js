import React from 'react';
import ReactDOM from 'react-dom';
import App from './data/main/App'
import { Provider } from 'react-redux'
import store from './data/store'

if (document.getElementById('root')) {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
        , document.getElementById('root'));
}
