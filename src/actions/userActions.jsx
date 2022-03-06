import axios from 'axios';
import { decodeToken } from 'react-jwt';
const apiURL = process.env.REACT_APP_API_URL + "/users"

export const registerUser = (user) => async dispatch => {
    dispatch({ type: 'USER_REGISTER_REQUEST' })
    try {
        await axios.post(`${apiURL}/register`, user);
        dispatch({ type: 'USER_REGISTER_SUCCESS' })

    } catch (error) {
        dispatch({ type: 'USER_REGISTER_FAILED', payload: error })

    }
}


export const loginUser = (email, password) => async dispatch => {
    dispatch({ type: 'USER_LOGIN_REQUEST' })

    try {

        const response = await axios.post(`${apiURL}/login`, { email, password });
        const decodedAccess = decodeToken(response.data.token);
        const userData = {
            token: response.data.token,
            user: {
                name: decodedAccess.name,
                email: decodedAccess.email,
                id: decodedAccess.user_id
            },
        }
        dispatch({ type: 'USER_LOGIN_SUCCESS', payload: userData });
        
        // Store the user in the localStorage
        localStorage.setItem('currentUser',JSON.stringify(userData));
        
        // redirect to the home page  
        window.location.href='/'
    
    } catch (error) {
        dispatch({ type: 'USER_LOGIN_FAILED', payload: error })


    }

}

export const logoutUser=()=>dispatch=>{
    localStorage.removeItem('currentUser');
    window.location.href='/login'
}