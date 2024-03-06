import { statsReducer } from './statsReducer';
import { ReduxAction } from './../utils/types.d';
import { RootState } from "../utils/types";
import { userReducer } from './userReducer';
import { combineReducers } from 'redux';

// const initialState: RootState = {
//     user: {
//         name: 'Monster',
//         avatar: 'https://gravatar.com/avatar/000?d=monsterid'
//     },
//     stats: {
//         followers: 0,
//         following: 0
//       }
// }

// export const rootReducer = (state: RootState = initialState , action: ReduxAction) => {
//     return {
//         user: userReducer(state.user, action),
//         stats: statsReducer(state.stats, action)
//     }
// }

export const rootReducer = combineReducers({
    user: userReducer,
    stats: statsReducer
})