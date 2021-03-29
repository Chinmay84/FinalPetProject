import {REGISTER_SUCCESS,REGISTER_FAIL} from '../Constants/Constants'
import axios from 'axios';
const RegisterDocAction = (userState, history) => {
    return async (dispatch) => {
        try {
            console.log("above reg user");
            const registeredUser=localStorage.getItem("registeredUser");
            const reg=JSON.parse(registeredUser)
            console.log(reg);
            const docUser={
                ...reg,
                ...userState
            }
            console.log(docUser);
            const data = await axios.post("http://localhost:8080/api/unauthuser/signUpForDoc", docUser);
            console.log(data);
            dispatch({ type: REGISTER_SUCCESS, payload: data });
            history.push("/profile/home");
        } catch (error) {
            console.log(error.response);
            dispatch({ type: REGISTER_FAIL, payload: error.message })
        }
    }
}

export default RegisterDocAction;