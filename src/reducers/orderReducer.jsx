export const placeOrderReducer=(state={},action)=>{
    switch(action.type)
    {
        case 'PLACE_ORDER_REQUEST' : return {
            loadin:true
        }
        case 'PLACE_ORDER_SUCCESS' : return {
            loadin:false,
            success:true
        }
        case 'PLACE_ORDER_FAILED' : return {
            loadin:false,
            error:action.payload
        }
        default : return state
    }
}