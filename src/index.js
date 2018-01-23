import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {BrowserRouter} from 'react-router-dom';
import  {createStore,applyMiddleware} from 'redux';
import 'bootstrap/dist/css/bootstrap.css';
import '../src/css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    (state = {})=>state,
    applyMiddleware(thunk)
);

ReactDOM.render((
<Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>
), document.getElementById('root'));
registerServiceWorker();
