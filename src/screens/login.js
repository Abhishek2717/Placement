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
            <div className='innerbox'>
              <div className='logo'>
              <img src='logo.jpg' alt="hello" ></img>
              </div>              <br></br><br></br>
            <form action="" onSubmit={handleSubmit}>
              <div className='innnerbox'>
                {/* <i style="font-size:24px" class="fas">
                &#xf406;
              </i> */}
                <label htmlFor="username">Username</label>
                <br></br>
                <input
                  type="text"
                  autoComplete="off"
                  value={userRegistration.username}
                  onChange={handleInput}
                  name="username"
                  id="username"
                />
              </div>

              <div className='innnerbox'>
                {/* <i style="font-size:24px" class="fas">
                &#xf023;
              </i> */}
                <label htmlFor="password">Password</label>
<br></br>
                <input
                  type="text"
                  autoComplete="off"
                  value={userRegistration.password}
                  onChange={handleInput}
                  name="passsword"
                  id="password"
                />
              </div>
              <br></br>
              <button type="submit">Login In</button>
              
            </form>
            </div>
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