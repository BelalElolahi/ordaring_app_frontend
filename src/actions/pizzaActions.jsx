import axios from 'axios'
const apiUrl = process.env.REACT_APP_API_URL

export const getAllPizzas=()=> async dispatch=>{
    dispatch({type:"GET_PIZZAS_REQUEST"})
   try {
       const res = await axios.get(`${apiUrl}/pizzas/`);
       dispatch({type:"GET_PIZZAS_SUCCESS",payload:res.data})
   } catch (error) {
    dispatch({type:"GET_PIZZAS_FAILED",payload:error})       
   } 
}