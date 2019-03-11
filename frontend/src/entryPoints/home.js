import React from 'react';
import {render} from 'react-dom';
import Home from '../pages/containers/home';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../reducers/data';

const homePage = document.getElementById('homeContainer');

const initialState = {
    data: {
        msg: 'soy un mensajo'
        }
    }
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
    
const store = createStore(
    reducer,
    initialState,
    enhancer
);

// render(<Home />, homePage);

render(
    <Provider store = {store}>
        <Home />
    </Provider>
    , homePage
);