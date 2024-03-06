import { CHANGE_AVATAR, CHANGE_NAME } from "../actions/userActions";
import { ReduxAction, User } from "../utils/types";

const initialState = {
    name: 'Monster',
    avatar: 'https://gravatar.com/avatar/000?d=monsterid'
}

export const userReducer = (state: User = initialState, action: ReduxAction) => {
    switch (action.type) {
        case CHANGE_NAME:
            return { ...state, name: action.payload || state.name }
        case CHANGE_AVATAR:
            return { ...state, avatar: action.payload || state.avatar }
        default:
            return state;
    }
}