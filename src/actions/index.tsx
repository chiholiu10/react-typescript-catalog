export const types = {
    GET_DATA: 'GET_DATA',
    GET_CAST: 'GET_CAST'
}

export const getData = (data: object) => {
    return {
        type: types.GET_DATA,
        data
    }
}

export const getCast = (castData: object) => {
    return {
        type: types.GET_CAST,
        castData
    }
}