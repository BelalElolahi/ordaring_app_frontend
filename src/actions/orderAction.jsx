import axios from "axios";
const apiURL = process.env.REACT_APP_API_URL + '/orders'

export const placeOrder = (token, subTotal) => async (dispatch, getState) => {

    dispatch({ type: "PLACE_ORDER_REQUEST" });
    const currentUser = getState().LoginUserReducer.currentUser;
    const cartItems = getState().cartReducer.cartItems;
    try {
        const response = await axios.post(`${apiURL}/placeorder`, { token, subTotal, currentUser, cartItems })

        dispatch({ type: "PLACE_ORDER_SUCCESS" });

        console.log(response)
    } catch (error) {
        dispatch({ type: "PLACE_ORDER_FAILED" });

        console.log(error);
    }

}