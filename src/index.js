import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
// import registerServiceWorker from './registerServiceWorker';


import mainReducer from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(mainReducer)} >
    
    <App />
    </Provider>
    , document.getElementById('root'));


