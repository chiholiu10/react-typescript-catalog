export const types = {
    GET_DATA: 'GET_DATA',
    GET_CAST: 'GET_CAST',
    TOGGLE_DETAIL: 'TOGGLE_DETAIL'
}

export const getData = (data: object) => {
    return {
        type: types.GET_DATA,
        data
    }
}

export const getCast = (castingData: object) => {
    return {
        type: types.GET_CAST,
        castingData
    }
}


export const toggleDetail = () => {
    return {
        type: types.TOGGLE_DETAIL
    }
}

