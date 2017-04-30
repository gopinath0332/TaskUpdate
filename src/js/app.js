import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";


import store from "./store/store";
import Task from "./views/Task";
import "../less/app.less";

render(<Provider store={store}>
	<Task></Task>
</Provider>, document.getElementById("content"));
