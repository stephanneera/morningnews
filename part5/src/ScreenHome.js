import React, { useState } from 'react';
import {connect} from 'react-redux';
import './App.css';
import {Input,Button} from 'antd';
import Password from 'antd/lib/input/Password';
import { Redirect } from 'react-router-dom';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react';

function ScreenHome(props) {

  const [signUpUsername, setSignUpUsername] = useState();
  
  const [signUpEmail, setSignUpEmail] = useState();
 
  const [signUpPassword, setSignUpPassword] = useState();

  const [userExist, setUserExists] = useState(false);

  const [signInEmail, setSignInEmail] = useState();
 
  const [signInPassword, setSignInPassword] = useState();

  const [signInUserExist, setSignInUserExist] = useState(false);


  var handleSubmitSignIn = async () => {


    var data = await fetch(`/sign-in`, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    body: `email=${signInEmail}&password=${signInPassword}`
                  })
    
      var body =  await data.json()
      setSignInUserExist(body.login);
      if(body.login) {
      props.getToken(body.searchUser.token);
      }

         
         
    }

var handleSubmitSignUp = async () => {


  var data = await fetch(`/sign-up`, {
                  method: 'POST',
                  headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                  body: `username=${signUpUsername}&email=${signUpEmail}&password=${signUpPassword}`
                })
  
    var body =  await data.json()
    console.log(body.result);
       setUserExists(body.result);
       props.getToken(body.newUserSave.token);
       
  }



  return (
    <div className="Login-page" >

          {/* SIGN-IN */}

          <div className="Sign">
                  
                  <Input  onChange={(e) => setSignInEmail(e.target.value)} value={signInEmail}
 className="Login-input" placeholder="arthur@lacapsule.com" />

                  <Input.Password  onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} className="Login-input" placeholder="password" />
            
        
         {signInUserExist ? <Redirect to='/screensource' /> : <Redirect to='/' /> }
              <Button onClick={()=> handleSubmitSignIn()} style={{width:'80px'}} type="primary">Sign-in</Button>

          </div>

          {/* SIGN-UP */}

          <div className="Sign">
                  <Input  onChange={(e) => setSignUpEmail(e.target.value)} value={signUpEmail}
                   className="Login-input" placeholder="arthur@lacapsule.com" />

                  <Input  onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} className="Login-input" placeholder="Arthur G" />

                  <Input.Password  onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} className="Login-input" placeholder="password" />
            
            {userExist ? <Redirect to='/screensource' /> : <Redirect to='/' /> }
            <Button  onClick={()=> handleSubmitSignUp()} style={{width:'80px'}} type="primary">Sign-up</Button>

          </div>
       

      </div>
  );
}


function mapDispatchToProps(dispatch) {
  return { 
    getToken : function(token){
      dispatch({type : 'gettoken', token})
    }
  }
}

export default connect(null,  
    mapDispatchToProps
)(ScreenHome);

