import React,{Component} from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route}
  from 'react-router-dom';
import Header from './components/Header/Header';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Home from './components/Home';
import firebase from './components/Services/firebaseConfig';
// import './App.css';

//import logo from './logo.svg';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      user:{}
     }
  }
  componentDidMount(){
    this.authListener();
  }
  
   
  authListener(){
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({
          user
        })
      }
      else{
        this.setState({
          user:null
        })
      }
    })
  }

 


  render() {

  return (
<div>
  
  <Router>
 
    <Header/>
    <br></br>
    <div>
      <Switch>
        
        <Route path="/"  exact component={Home}/>
   
        <Route path="/SignUp" component={Signup}/>
        <Route path="/Login" component={Login}/>
    
       
      </Switch>
    </div>
  </Router>
  </div>
  );
}
}
export default App;
