import React, { Component } from "react";
import { connect } from "react-redux";
import { getTasks, addTask } from "../action/action";


@connect((store) => {
	return { ...store.taskList };
})
export default class Task extends Component {
	componentWillMount() {
		this.props.dispatch(getTasks());
	}
	addTask() {
		let value = this.task.value;
		let payload = {
			task: value,
			comment: value
		};
		this.props.dispatch(addTask(payload));
	}
	render() {
		console.debug(this.props);
		return (
			<div>
				<input type="text" className="form-control" ref={node => this.task = node} />
				<button className="btn btn-default" onClick={this.addTask.bind(this)} >Add Task</button>
			</div>
		);
	}
}
