import {combineReducers} from 'redux';
import repositoriesReducer from "./repoReducer";

export default combineReducers({repos: repositoriesReducer});