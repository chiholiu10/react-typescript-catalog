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
            console.log('get cast')
            return { 
                ...state,
                castList: action.castingData,
                showDetail: true
            }
        }

        case types.TOGGLE_DETAIL: {
            return {
                ...state,
                showDetail: false
            }
        }

        default: 
            return state;
    }
}