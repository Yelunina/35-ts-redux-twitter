import { CHANGE_STATS } from "../actions/statsAction";
import { ReduxAction, Stats, StatsType } from "../utils/types";

const initialState = {
    followers: 0,
    following: 0
}

export const statsReducer = (state: Stats = initialState, action: ReduxAction) => {
    switch (action.type) {
        case CHANGE_STATS:
            const statsType = action.payload.statsType as StatsType;
            const res = state[statsType] + action.payload.sum;
            return { ...state, [statsType]: res < 0 ? 0 : res }
        default:
            return state;
    }
}