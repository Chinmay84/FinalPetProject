import {REGISTER_SUCCESS,REGISTER_FAIL} from '../Constants/Constants'
import axios from 'axios';
const RegisterFosterAction = (userState, history) => {
    return async (dispatch) => {
        try {
            const registeredUser=localStorage.getItem("registeredUser");
            const reg=JSON.parse(registeredUser);
            const fosUser={
                ...reg,
                ...userState
            }
            console.log(fosUser);
            const data = await axios.post("http://localhost:8080/api/unauthuser/signUpForFoster", fosUser);
            console.log(data);
            dispatch({ type: REGISTER_SUCCESS, payload: data });
            history.push("/");
        } catch (error) {
            console.log(error);
            dispatch({ type: REGISTER_FAIL, payload: error.message })
        }
    }
}

export default RegisterFosterAction;