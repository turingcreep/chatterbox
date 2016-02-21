import {combineReducers} from 'redux';
const	_ = {},
	_reducers=[];
let	_rootreducer=null;
export default class ReducerContainer{
	static getInstance(){
		return _;	
	}
	add(reducer){
		_reducers.push(reducer);	
	}
	getReducer(){
		if(!_rootreducer){
			_rootreducer=combineReducers(..._reducers);
		}
		return _rootreducer;
	}
}
