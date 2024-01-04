
import {moveReducer} from "./redux/MoveReducer/MoveReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";

export const store=createStore(
moveReducer,
composeWithDevTools(applyMiddleware(thunk))

)