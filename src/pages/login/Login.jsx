import React from 'react'
import './login.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../actions/userActions';
import { LoginUserReducer } from '../../reducers/userReducer';
import Loading from '../../components/loading/Loading';
import Error from '../../components/error/Error';


export default function Login() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const userData = useSelector(state => state.LoginUserReducer)
  const { loadin, error } = userData;
  const dispatch = useDispatch();


  function loginHandler() {
    if (email && password) {
      dispatch(loginUser(email, password));
    }
  }

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-let shadow-lg p-3 mb-5 bg-white rounded" >

          <h2 className='registerTilte'>Login</h2>
          {loadin && (<Loading />)}
          {error && (<Error error='Invalid Credentials'/>)}
          <div className="">
            <input required type="text" placeholder='email' className='form-control' value={email} onChange={(e) => (setemail(e.target.value))} />
            <input required type="password" placeholder='password' className='form-control' value={password} onChange={(e) => (setpassword(e.target.value))} />
            <button onClick={loginHandler} className="btn mt-5 mb-3">LOGIN</button>
            <br />
            <a href='/register'>Click Here To Register</a>
          </div>
        </div>
      </div>
    </div>
  )
}
