export const initialState = {
    title: '',
    content: '',
    status: 'idle',
    error: null
}

export function postFormReducer(state, action) {
    switch(action.type) {
        case 'UPDATE_FIELD': {
            return {
                ...state,
                [action.field]:action.value
            }
        }
        case 'SUBMIT_START': {
            return {
                ...state,
                status: 'submitting'
            }
        }
        case 'SUBMIT_SUCCESS': {
            return {
                ...state,
                status: 'success'
            }
        }
        case 'SUBMIT_ERRROR': {
            return {
                ...state,
                status: 'error'
            }
        }
        default:
            return state
    }
}