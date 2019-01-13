import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { CreateStore, applyMiddleware, createStore} from 'redux';

import App from './components/App';

const store = createStore( () => [], {}, applyMiddleware());

ReactDOM.render(<Provider store={store}><App /></Provider>,
    document.querySelector('#root')
);
