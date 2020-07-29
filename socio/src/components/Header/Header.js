import React,{Component} from 'react';
import{
    NavLink}
from 'react-router-dom';
import './Header.css';
import socio from '../socio.png';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="HeaderNav">
                <h1 className="logo">
                    {/* <em>S</em>
                    <em className="planet left">O</em>
                    <em>C</em>
                    <em className="planet right">I</em>
                    <em>O</em> */}
                    SOCIO
                </h1>
                <NavLink className="Navlink_2" to="SignUp">Signup</NavLink>
                
                <NavLink className="Navlink_2" to="/Login">
                     Login
                </NavLink>
            </div>
         );
    }
}
 
export default Header;