export const types = {
    GET_DATA: 'GET_DATA',
    GET_CAST: 'GET_CAST',
    EMPTY_DETAIL: 'EMPTY_DETAIL'
}

export const getData = (data: object) => {
    return {
        type: types.GET_DATA,
        data
    }
}

export const getCast = (castingData: any) => {
    return {
        type: types.GET_CAST,
        castingData
    }
}


export const emptyDetail = () => {
    return {
        type: types.EMPTY_DETAIL
    }
}

