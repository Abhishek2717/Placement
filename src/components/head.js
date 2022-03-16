import React,{Component} from 'react';
class Head extends React.Component {
    render(){
        return(
            <div>
                  
    <div class="bg">
      
      <img src="logo.SVg" width="400PX">
  
      <div class="LOGIN-box">
        
        <div class="login">
            <img src="logo.jpg" width="100px" style="border-radius: 150px;margin-left: 25%;margin-top: -20%;">
  <BR><br>
    <div class="input-container" style="border-radius: 1050px;">
      <i class="material-icons">account_circle</i>
      <input class="input-field" type="text" title="Enrollment Roll number" placeholder="Enter Username"></input>
      
    </div>
    <div class="input-container">
      <i class="material-icons">lock</i>
      <input type="password" class="input-field" placeholder="Enter Password">
      </input>
    </div>
          <button style="background-color: RED;margin: auto;width: 100%;border-radius: 20px;height: 45px;align-content: center;"><p style="color: aliceblue;">LOGIN</p></button>
            </div>
        )

    }
}
export default Head
