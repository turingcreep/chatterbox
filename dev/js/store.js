import {createStore} from 'redux';
import getReducer from './reducer';

var reducer = getReducer();
const store = createStore(reducer);
