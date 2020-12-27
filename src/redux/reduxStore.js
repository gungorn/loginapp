import { createStore, combineReducers } from 'redux';

import LoginReducer from './login/reducer';

const store = createStore(combineReducers({
    LoginReducer
}));

export default store;
