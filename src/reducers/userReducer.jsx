export const registerUserReducer=(state={},action)=>{
    switch(action.type)
    {
        case 'USER_REGISTER_REQUEST' : return {
            loadin:true
        }
        case 'USER_REGISTER_SUCCESS' : return {
            loadin:false,
            success:true
        }
        case 'USER_REGISTER_FAILED' : return {
            loadin:false,
            error:action.payload
        }
        default : return state
    }
}

export const LoginUserReducer=(state={},action)=>{
    switch(action.type)
    {
        case 'USER_LOGIN_REQUEST' : return {
            loadin:true
        }
        case 'USER_LOGIN_SUCCESS' : return {
            loadin:false,
            success:true,
            currentUser:action.payload
        }
        case 'USER_LOGIN_FAILED' : return {
            loadin:false,
            error:action.payload
        }
        default : return state
    }
}