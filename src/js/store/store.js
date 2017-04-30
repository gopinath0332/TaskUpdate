import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";

import reducer from "../reducer/reducer";



const enhancers = compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
);
const middleware = applyMiddleware(promiseMiddleware(), createLogger(), thunk);

const finalStore = compose(middleware, enhancers)(createStore);
// export default createStore(reducer, middleware);
export default finalStore(reducer);
