import { createStore, applyMiddleware } from 'redux';
import catalogData from './reducers';
import thunk from 'redux-thunk';

export const store = createStore(
    catalogData,
    applyMiddleware(thunk)
);