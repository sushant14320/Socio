import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route}
  from 'react-router-dom';
import Header from './components/Header/Header';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Home from './components/Home';
//import logo from './logo.svg';


function App() {
  return (
  <Router>
    <Header/>
    <div>
      <Switch>
        <Route path="/"  exact component={Home}/>
        <Route path="/SignUp" component={Signup}/>
        <Route path="/Login" component={Login}/>
    

      </Switch>
    </div>
  </Router>
  );
}

export default App;
