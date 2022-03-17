import React, {component, useState} from 'react';
import './login.css';
const Login = () => {

  

    return (
      <>
        <body>
          <div className="login-box">
            <img src="logo.jpg" alt="hello" width={"100px"}></img>
            <br></br><br></br>
            <h2>Login</h2>
            <br></br>
            <form action="">
              <div className="user-box">
                {/* <i style="font-size:24px" class="fas">
                &#xf406;
              </i> */}
                <input
                  type="text"
                  autoComplete="off"
                  name="username"
                  id="username"
                />
                <label htmlFor="username">Username</label>
              </div>

              <div className="user-box">
                <input
                  type="password"
                  autoComplete="off"
                  name="passsword"
                  id="password"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                  placeholder=""
                  required=""
                />
                <label htmlFor="password">Password</label>
              </div>

              <button type="submit" >Login</button>
              
            </form>
          </div>
        </body>
      </>
    );

}

export default Login;