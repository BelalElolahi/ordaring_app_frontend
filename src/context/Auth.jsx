import { createContext, useContext, useState ,useEffect} from 'react';
import jwt from 'react-jwt';
import axios from 'axios'
const baseUrl = process.env.REACT_APP_API_URL;
const tokenUrl = baseUrl + 'users/login';

const AuthContext = createContext();

export function useAuth() {

    const auth = useContext(AuthContext);
    if (!auth) throw new Error('You forgot AuthProvider!');
    return auth;
}

export function AuthProvider(props) {
     
    const [state, setState] = useState({
        tokens: null,
        user: null,
        login,
        logout,
    });
  useEffect(() =>{

   const data=JSON.parse(localStorage.getItem('state')) 
   setState(prevState => ({ ...prevState, ...data }));

    


}, []);
      
    async function login(username, password) {

        const response = await axios.post(tokenUrl, { username, password });
        //console.log(response.data)

        const decodedAccess = jwt.decode(response.data.access);
        console.log(decodedAccess)

        const newState = {
            tokens: response.data,
            user: { 
                username: decodedAccess.username,
                email: decodedAccess.email,
                id: decodedAccess.user_id
            },
        }
        setState(prevState => ({ ...prevState, ...newState }));
        localStorage.setItem('state', JSON.stringify(newState))
    }
    function logout() {
        
        const newState = {
            tokens: null,
            user: null,
        }
        setState(prevState => ({ ...prevState, ...newState }));
        localStorage.setItem('state', JSON.stringify(newState))

    }

    return (
        <AuthContext.Provider value={state}>
            {props.children}
        </AuthContext.Provider>
    );
}