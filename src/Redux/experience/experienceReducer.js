import { EXPERIENCE_FETCH_ERROR, EXPERIENCE_FETCH_SUCCESS, EXPERIENCE_FETCH_REQUEST } from "./experienceTypes";


const initialState ={
    loading: false,
    experience: [],
    error: ''
}


const experienceReducer  = (state = initialState, {type, payload}) => {
    switch (type) {
        case EXPERIENCE_FETCH_REQUEST:
            return{
                ...state, 
                loading: true
            }
        case EXPERIENCE_FETCH_SUCCESS:
            return{
                loading: false,
                experience: payload,
                error: ''
            }
        case EXPERIENCE_FETCH_ERROR:
            return{
                loading: false,
                experience: [],
                error: payload
            }
            
        default: return state;
    }
}

export default experienceReducer;