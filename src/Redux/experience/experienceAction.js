import axios from "axios";
import { EXPERIENCE_FETCH_ERROR, EXPERIENCE_FETCH_REQUEST, EXPERIENCE_FETCH_SUCCESS } from "./experienceTypes";

const fetchRequest = () => {
    return{
        type: EXPERIENCE_FETCH_REQUEST
    }
}
const fetchSuccess = (homes) => {
    return{
        type: EXPERIENCE_FETCH_SUCCESS,
        payload: homes
    }
}
const fetchError = (error) => {
    return{
        type: EXPERIENCE_FETCH_ERROR,
        payload: error
    }
}


const fetchExperiences = () => {
    return async(dispatch) => {
        dispatch(fetchRequest);
        await axios.get('http://localhost:5000/experience')
        .then(res => dispatch(fetchSuccess(res.data)))
        .catch(error =>dispatch(fetchError(error.message)))
    }
}

export {fetchExperiences, fetchError, fetchRequest, fetchSuccess};