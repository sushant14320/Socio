import React,{Component}from 'react';
import './Signup.css';
import { Container } from '@material-ui/core';
import logo from '../SocioLogo.png';
import TextField from '@material-ui/core/TextField';
import {Link} from'react-router-dom';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
    
//     faFacebook,
//     faTwitter,
    
    
//   } from "@fortawesome/free-brands-svg-icons";


class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           email:'',
           password :''
         }
    }

    





    render() { 
        return ( 
            <div>
               <div className='Maincontainer'>
               <Container maxWidth='sm'>
        {/* <p>Post Anywhere Anytime...</p> */}
         <h1 className="welcome">SignUp here</h1>
         <div id="logoSocio">
         <img src={logo} alt="logo" id='sociologo'/>
         </div>
 
         <p className="para_login">SignUp to get registered</p>
         <i class="fas fa-home"></i>
<br></br><br></br>

<form>

<section className="Field_section">
            
    <div>
        
        <label id="email">Email</label><br></br><br></br>
   
     {/* <TextField id='standard-basis' label='Email' autoFocus required fullWidth/> */}
     <input
                  name="email"
                  type="text"
                  className="form-control"
                  placeholder="mail@gmail.com"
                  value={this.state.email}
                  onChange={this.HandleE}
                />
  
  
    </div> <br></br>

<div>


<label id="password">Password</label>
  
   {/* <TextField id='standard-basis' label='Password' type="password" autoFocus required  margin='normal' fullWidth /> */}
   <input
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="**********"
                    value={this.state.password}
                    onChange={this.HandleP}
                  />


</div><br></br>




<div>
<label id="password">Confirm Password</label>
   
   
   {/* <TextField id='standard-basis' label='Password' type="password" autoFocus required  margin='normal' fullWidth/> */}

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
<div>
   <button id='btnSignup'>SignUp</button>
</div>   
<br></br>
 {/* <a href={'#'} id='forgetPass'>Forget Password ?</a> */}
 <br></br>

{/* Sign with Social handle */}
 {/* <div id='lo'>
        <p>Or Sign in with</p><br></br>
     
     &nbsp; &nbsp;
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

      &nbsp; &nbsp; &nbsp; &nbsp;

      
      
    
 </div> */}
<br></br><br></br>
 
{/* If user don't have an account */}
{/* <p className="No_acc">Don't have an account? <a href={<Signup/>} style={{textDecoration:'none'}}>Sign Up</a></p> */}
<br></br><br></br>
 </form> 
 
 
 <div className="backSign">
      
      <Link id='backSignup' to='/'>Home</Link>
 
 </div>
   </Container>

                 </div>  
            </div>
         );
    }
}
 
export default Signup;