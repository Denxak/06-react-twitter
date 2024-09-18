import { CHANGE_STAT } from "../actions/statsAction";

const initialState = {
    followers: 10,
    following: 100,
};

export const statsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_STAT:
            const { prop, delta } = action.payload;
            return { ...state, [prop]: Math.max((state[prop] + delta), 0) };
        default:
            return state;
    }

}