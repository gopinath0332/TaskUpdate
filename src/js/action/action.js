import { ADD_TASK, GET_TASKS } from "../types/actionTypes";
import axios from "axios";
import database from "../config/firebase";


export function getTasks1() {
	return {
		type: GET_TASKS,
		payload: axios.get("../../data/task.json")
	};
}

export function getTasks() {
	return dispatch => {
		database.ref().once("value").then((response) => {
			dispatch({
				type: GET_TASKS,
				payload: response.val()
			});
		}).catch((e)=>{
			console.error("Error in fetching list",e);
		});
	};
}

export function addTask(payload) {
	return {
		type: ADD_TASK,
		payload
	};
}
