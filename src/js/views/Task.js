import React, { Component } from "react";
import { connect } from "react-redux";
import { getTasks, addTask } from "../action/action";


@connect((store) => {
	return { ...store.taskList };
})
export default class Task extends Component {
	componentWillMount() {
		this.props.dispatch(getTasks());
		// this.getData();
	}
	getData() {
		// app.database().ref("/").once("value").then((response) => {
		// 	console.debug("firebase response", response.val());
		// });
	}
	render() {
		return (<div>Test task component123 - {this.props.list}</div>);
	}
}
