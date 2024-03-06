import { legacy_createStore as createStore } from "redux";
import { rootReducer } from "../reducers/rootReducer";
//import { twitterReducer } from "../reducers/twitterReducer";

export const store = createStore(rootReducer);