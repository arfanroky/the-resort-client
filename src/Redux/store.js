import {createStore , applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import rootReducer from './rootReducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger, thunk))
)

export default store;