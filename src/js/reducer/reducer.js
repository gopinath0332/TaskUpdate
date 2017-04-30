import { combineReducers } from "redux";

import { ADD_TASK, GET_TASKS } from "../types/actionTypes";



const defaultState = {
	"taskList": []
};
const reducer = function (state = defaultState, action) {
	switch (action.type) {
		case ADD_TASK:
			return { ...state };
		case GET_TASKS:
			return { ...state, taskList: action.payload };
		case GET_TASKS + "_FULFILLED":
			return { ...state, taskList: action.payload };
	}
	return {...state};
};

const rootReducer = combineReducers({
	"taskList": reducer
});

export default rootReducer;
// export default reducer;
