import React from 'react'
import { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../actions/userActions';
import './register.css'
import Loading from '../../components/loading/Loading';
import Success from '../../components/success/Success';
import Error from '../../components/error/Error';
export default function Register() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const registerState = useSelector(state=>state.registerUserReducer)
  const {error,loadin,success} = registerState;
  const dispatch = useDispatch();
  
  function registerHandler(){
    //validate if the user paswords are match
    if(password === confirmPassword){
      const user = {
        name:name,
        email:email,
        password:password,
        confirmPassword:confirmPassword
      }
      // dispatch user
      dispatch(registerUser(user));

    } else{
      alert("passwoeds not matched")
    }
  
   
  }  

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-let shadow-lg p-3 mb-5 bg-white rounded" >
          <h2 className='registerTilte'>Register</h2>
         {loadin && (<Loading/>)}
         {success && (<Success success="User Registerd Successfully"/>)}
         {error && (<Error error="Email Already Exist"/>)}
          <div className="">
            <input required type="text" placeholder='name' className='form-control' value={name} onChange={(e)=>(setname(e.target.value))} />
            <input required type="text" placeholder='email' className='form-control' value={email} onChange={(e)=>(setemail(e.target.value))} />
            <input required type="password" placeholder='password' className='form-control' value={password} onChange={(e)=>(setpassword(e.target.value))} />
            <input  required type="password" placeholder='confirm password' className='form-control' value={confirmPassword} onChange={(e)=>(setconfirmPassword(e.target.value))}/>
            <button onClick={registerHandler} className="btn mt-5 mb-3">REGISTER</button>
            <br/>
            <a href='/login'>Click Here To Login</a>
          </div>
        </div>
      </div>
    </div>
  )
}
