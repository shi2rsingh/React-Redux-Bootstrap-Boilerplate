import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import commonReducer from './reducer';

let store = createStore(commonReducer, [])

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>,document.getElementById('root'));
registerServiceWorker();
