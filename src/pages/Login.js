import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession } from '../Utils/Common';
import './Login.css'
// import { Link } from 'react-router-dom'
function Login(props) {
  const [loading, setLoading] = useState(false);
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);

  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post('http://localhost:4000/users/signin', { username: username.value, password: password.value }).then(response => {
      setLoading(false);
      setUserSession(response.data.token, response.data.user);
      props.history.push('/dashboard');
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
    });
  }

  return (
    <div className = "login-background">
      <div className = "login-container">
        <div className = "login-content row">

          <div className="col-12 text-center login-title">Login</div>

          <div className="col-12 form-group">
            <div className = "text-content">User Name:</div>
            <div className="login-password">
                    <input type="text"
                    className="form-control login-input"
                    placeholder="Enter your user name"
                    {...username} autoComplete="new-password" />
            </div>
            
          </div>

          <div className="col-12 form-group">
            <div className = "text-content">Password:</div>
            <div className="login-password">
                  <input type="password" 
                  className="form-control login-input"
                  placeholder="Enter your password"
                  {...password} autoComplete="new-password" />
            </div>
            
          </div>
          
          {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
          <input className="btn-login" type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />

          <div className="col-12">
            <span className="forgot-password">Forgot your password?</span>
          </div>

          <div className="col-12 text-center login-with mt-3">
            <span className="">Or login with:</span>
          </div>
          
          <div className="col-12 social-login">
            <i className="fab fa-facebook social-icon fb"></i>
            <i className="fab fa-google-plus social-icon gg"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Login;