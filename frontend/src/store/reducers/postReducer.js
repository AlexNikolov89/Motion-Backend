import { NEW_POST, GET_SPECIFIC_POST } from '../actions/actionTypes'

const initialState = {
    newPost: null,
    specificPost: null,
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_POST : {
            const newState = {...state}
            newState.newPost = action.payload
            return newState
        }
        case GET_SPECIFIC_POST: {
            const newState = {...state}
            newState.specificPost = action.payload
            return newState
        }
        default: {
            return state
        }
    }

}