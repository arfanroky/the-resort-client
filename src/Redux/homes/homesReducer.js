import { HOME_FETCH_ERROR, HOME_FETCH_REQUEST, HOME_FETCH_SUCCESS } from "./homesTypes"

const initialState = {
    loading: false,
    homes: [{
        id:1,
        name: 'Cottage',
        title: 'sweet bed and attached bathroom',
        desc: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut atque reprehenderit quis accusantium sint! Officiis, repellendus ea qui nisi laboriosam eveniet id velit inventore ipsa illo voluptatum? Esse, quo! Quaerat.`
    }],
    error: ''
}


const homesReducer = (state = initialState, {type, payload}) => {
    switch (type){
        case HOME_FETCH_REQUEST:
            return {
                ...state,
                loading: true
            }
        case HOME_FETCH_SUCCESS:
            return {
                loading: false,
                homes: payload,
                error: ''
            }
        case HOME_FETCH_ERROR:
            return {
                loading: false,
                homes: [],
                error: payload
            }
        default: return state
    }
}

export default homesReducer;