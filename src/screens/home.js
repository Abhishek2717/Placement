import React, {component} from 'react';
import './home.css';
// import img1 from './logo.jpg'
class Home extends React.Component
{
    render(){
        return (
          <>
            <body>
              <div className="contents">
                <div className="box">
                  <img
                    src="logo.jpg"
                    alt="hello"
                    title="image hai ye bhadwe"
                    className="logo"
                  />
                  <br></br>

                  <div className="input-box">
                    
                    <input
                      className="username"
                      value={""}
                      placeholder={"enter name"}
                    ></input>
                    <br></br>
                    <br></br>
                    <input
                      className="password"
                      value={""}
                      placeholder={"enter password"}
                    ></input>
                  </div>

                <button className='submit'>Log In</button>

                </div>
              </div>
            </body>
          </>
        );
    }
}

export default Home;