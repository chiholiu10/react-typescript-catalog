import { types } from '../actions/index';

const initialState = {
    catalogInfo: [],
    castList: []
}

export const catalogData = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_DATA: {
            return {
                ...state,
                catalogInfo: action.data
            }
        }

        case types.GET_CAST: {
            return { 
                ...state,
                castList: action.castingData
            }
        }

        case types.EMPTY_DETAIL: {
            return {
                ...state,
                castList: []
            }
        }

        default: 
            return state;
    }
}