import axios from "axios"
import {HOME_FETCH_ERROR, HOME_FETCH_REQUEST, HOME_FETCH_SUCCESS} from './homesTypes';


const fetchRequest = () => {
    return{
        type: HOME_FETCH_REQUEST
    }
}
const fetchSuccess = (homes) => {
    return{
        type:  HOME_FETCH_SUCCESS,
        payload: homes
    }
}
const fetchError = (error) => {
    return{
        type:  HOME_FETCH_ERROR,
        payload: error
    }
}


const fetchHomes =  () => {
    return  async (dispatch) => {
        dispatch(fetchRequest)
    await axios.get('http://localhost:5000/home')
     .then(res => dispatch(fetchSuccess(res.data))
     ) 
     .catch(error => dispatch(fetchError(error.message)))
    }
}

export {fetchHomes, fetchError, fetchRequest, fetchSuccess};