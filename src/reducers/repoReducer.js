import {
    GET_REPOS,
    CLEAR_REPOS
} from "../actions/types";

const initialState = {
    repoList: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_REPOS:
            return {
                ...state,
                repoList: action.payload
            };
        case CLEAR_REPOS:
            return {
                ...state,
                repoList: []
            };
        default:
            return state;
    }
}