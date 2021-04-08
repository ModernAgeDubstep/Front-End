import { actionTypes } from '../actions';

export const initialState = {
    isFetching: false,
    errorMessage: '',
    artistData: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.FETCH_START:
            return {
                ...state, 
                isFetching: true
            }
        case actionTypes.FETCH_END:
            return {
                ...state, 
                isFetching: false
            }
        case actionTypes.FETCH_ERROR:
            return {
                ...state, 
                errorMessage: action.payload
            }
        case actionTypes.GET_ALL_ARTISTS:
            return {
                ...state, 
                artistData: action.payload
            }
        default:
            return state;
    }
}