import {combineReducers} from 'redux';
const	_reducers=[];
let	_ = null,
	_rootreducer=null;
export class ReducerContainer{
	constructor(){
		if(_==null){
			_ = this;
		}
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
