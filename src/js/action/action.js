import axios from "axios";

import { ADD_FAIL, ADD_TASK, GET_TASKS } from "../types/actionTypes";

export function getTasks() {
	return {
		type: GET_TASKS,
		payload: axios.get("../../data/task.json")
	};
}

export function addTask(payload) {
	return {
		type: ADD_TASK,
		payload
	};
}
