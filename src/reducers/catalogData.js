import { types } from '../actions/index';

const initialState = {
    catalogInfo: [],
    toggle: false,
    showDetail: null
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
                castList: action.castData,
                showDetail: true
            }
        }
        
        default: 
            return state;
    }
}