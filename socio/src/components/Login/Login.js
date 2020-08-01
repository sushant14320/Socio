import React,{Component}from 'react';
import './Login.css';
import { Container } from '@material-ui/core';
import logo from '../SocioLogo.png';
import {Link} from'react-router-dom';
import firebase from '../Services/firebaseConfig';
// import TextField from '@material-ui/core/TextField';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
    
//     faFacebook,
//     faTwitter,
    
//   } from "@fortawesome/free-brands-svg-icons";
import Signup from '../Signup/Signup';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          email :'',
          password:''
         }
         
    }
    render() { 

// Login = (e) =>{
//   e.preventDefault();
//   firebase.auth().signInWithEmailAndPassword(this.state.email , this.state.password)
//   .then((u) => {
//     console.log(u)
//   })
//   .catch((err) => {
//   console.log(err);
//   })
// }



this.HandleE = (e) => {
      this.setState({
        email:e.target.value
      })
}

 this.HandleP = (e) => {
  this.setState({
    password:e.target.value
  })
}

        return ( 

<div>
<div className='Maincontainer'>
              <Container maxWidth='sm'>
              {/* <p>Post Anywhere Anytime...</p> */}
              
              <h1 className="welcome">Login Here</h1>
              
              <div id="logoSocio">
              
              <img src={logo} alt="logo" id='sociologo'/>
</div>

<p className="para_login">Login to your registered account</p>
<br></br><br></br>

<form>

  <section className="Field_section">

    <div>
              <label className="email">Email</label><br></br><br></br>
              <input
                  name="email"
                  type="text"
                  className="form-control"
                  placeholder="mail@gmail.com"
                  value={this.state.email}
                  onChange={this.HandleE}
                />
    </div> <br/><br/>

<div>
                <label className="password">Password</label><br></br><br></br>
                <input
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="**********"
                    value={this.state.password}
                    onChange={this.HandleP}
                  />

</div><br></br>
</section>
<div className="buttons">
 
  <div>
      
           <button id='btnLogIn'>Login</button>
 
  </div>   

    <div>
    
      <button id='btnCancel'>Cancel</button>

   </div> 

</div>
<br></br>
<a href={'#'} id='forgetPass'>Forget Password ?</a>
<br></br>

{/* Sign with Social handle */}
{/* <div id='lo'>
<p>Or Sign in with</p><br></br> */}
{/* <a
href="https://www.youtube.com/c/jamesqquick"
className="youtube social"
>
<FontAwesomeIcon icon={faYoutube} size="2x" style={{color:'red'}}/>
</a> */}
{/* &nbsp; &nbsp;
<a
href="https://www.facebook.com/learnbuildteach/"
className="facebook social"
>
<FontAwesomeIcon icon={faFacebook} size="2x" />
</a>

&nbsp; &nbsp; &nbsp; &nbsp;

<a href="https://www.twitter.com/jamesqquick" className="twitter social">
<FontAwesomeIcon icon={faTwitter} size="2x" style={{color:'rgb(65, 154, 184)'}} />
</a>

&nbsp; &nbsp; &nbsp; &nbsp; */}

{/* <a
href="https://www.instagram.com/learnbuildteach"
className="instagram social"
>
<FontAwesomeIcon icon={faInstagram} size="2x" />
</a> */}


{/* </div> */}
<br></br><br></br>
<div className="back">
<Link id='back' to='/'>Home</Link>
</div>

{/* If user don't have an account */}
<p className="No_acc">Don't have an account? <a href = {<Signup/>} style={{textDecoration:'none', color:'skyblue'}}>Sign Up</a></p>
<br></br><br></br>
</form> 
</Container>

  </div>  
</div>
         );
    }
}
 
export default Login;