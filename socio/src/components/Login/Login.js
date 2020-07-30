import React,{Component}from 'react';
import './Login.css';
import { Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
               <div className='Maincontainer'>
               <Container maxWidth='sm'>
        {/* <p>Post Anywhere Anytime...</p> */}
         <h1 className="welcome">Welcome Login</h1>
         {/* <img src={socio} id='sociologo'/> */}
 
         <p className="para_login">Login to your registered account</p>
<br></br>

<form>

<section className="Field_section">
            
    <div>
        <label>Email</label><br></br>
     <TextField id='standard-basis' label='Email' autoFocus required fullWidth/>
  </div> <br></br>

<div>
<label>Password</label>
   <TextField id='standard-basis' label='Password' autoFocus required  margin='normal' fullWidth/>
</div><br></br>
</section>
<div>
   <button id='btnLogIn'>Login</button>
</div>   

 <a href={'#'} id='forgetPass'>Forget Password ?</a>

{/* Sign with Social handle */}
 <div id='lo'>
        <p>Or Sign in with</p>
      <a
        href="https://www.youtube.com/c/jamesqquick"
        className="youtube social"
      >
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a
        href="https://www.facebook.com/learnbuildteach/"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com/jamesqquick" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/learnbuildteach"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    
 </div>

 
{/* If user don't have an account */}
<p>Don't have an account? <a href={'#'} style={{textDecoration:'none'}}>Sign Up</a></p>
 </form> 
   </Container>

                 </div>  
            </div>
         );
    }
}
 
export default Login;