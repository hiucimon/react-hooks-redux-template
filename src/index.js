import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import MainReducer from './redux/reducers/MainReducer'
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = compose(window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)(createStore)(MainReducer)

ReactDOM.render(<Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
serviceWorker.unregister();
