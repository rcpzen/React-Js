import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

const createStoreWidthMiddleware =applyMiddleware()(createStore); 

ReactDOM.render(
<Provider store={createStoreWidthMiddleware(rootReducer)}>
 <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
