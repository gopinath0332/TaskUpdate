import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import "../less/app.less";

import store from "./store/store";
import Task from "./views/Task";


render(<Provider store={store}>
	<Task></Task>
</Provider>, document.getElementById("content"));
