import React, {component, useState} from 'react';
import './login.css';
const Login = () => {

    const [userRegistration,setUserRegistration]=useState(
        {
            username:"",
            password:""
        }
    );

    const [records, setRecords] = useState([]);

    const handleInput = (e) =>{

        const name=e.target.name;
        const value=e.target.value;
        console.log(name,value);
        setUserRegistration({...userRegistration, [name] : value });

    }



    const handleSubmit = (e) =>{
        e.preventDefault();
    
        const newRecord = {...userRegistration, id : new Date().getTime().toString() }
       console.log(records);
    
        setRecords([...records, newRecord]);
        console.log(records);

        setUserRegistration({username:"",password:""});

    }

    return (
      <>
        <body>
          <div className="box">
              <img src='logo.jpg' alt="hello"></img>
            <form action="" onSubmit={handleSubmit}>
              <div>
                {/* <i style="font-size:24px" class="fas">
                &#xf406;
              </i> */}
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  autoComplete="off"
                  value={userRegistration.username}
                  onChange={handleInput}
                  name="username"
                  id="username"
                />
              </div>

              <div>
                {/* <i style="font-size:24px" class="fas">
                &#xf023;
              </i> */}
                <label htmlFor="password">Password</label>

                <input
                  type="text"
                  autoComplete="off"
                  value={userRegistration.password}
                  onChange={handleInput}
                  name="passsword"
                  id="password"
                />
              </div>

              <button type="submit">Login In</button>
            </form>
          </div>
          <div>
            {records.map((curElem) => {
              return (
                <div className="showDataStyle">
                  <p>{curElem.usernmae}</p>
                  <p>{curElem.password}</p>
                </div>
              );
            })}
          </div>
        </body>
      </>
    );

}

export default Login;