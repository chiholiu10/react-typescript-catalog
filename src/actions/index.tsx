export const types = {
    GET_DATA: 'GET_DATA'
}

export const getData = (data: object) => {
    return {
        type: types.GET_DATA,
        data
    }
}
