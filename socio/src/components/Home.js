import React,{Component}from 'react';
import '../components/Home.css';

import pic from './images/allapps.jpg'

import cursor from './images/cor.PNG'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='landing'>
              
            <div className='navbar'>
                         
              {/* <ul className="main-nav">
                              <li><Link className='login l1' to='/login'>Login</Link></li>
                              <li><Link className='login l1' to='/Signup'>Signup</Link></li>
              </ul> */}
               </div>
                  <div className='mainhead'>
                  <h1>Now post anything on all your apps in <br/>  a single click</h1>
                  </div>
                  <div className='allapps'>
                      <img src={pic} alt='all-apps' />
                  </div>
                   
                  <div className='cursor'>
                      <img src={cursor} alt='cursor'/>
                  </div>

                  <div className="tagline">
                              <div className='desc-head'>
                                 <h2>Create once &mdash; Post twice</h2>
                              </div>
                              <div className='long-description'>
                                 <p>
                                  Hello , we're SOCIO, your new social media management companion. We know you're always busy,
                                  No time for creating the same post again and again. So let us take care of that.....
                                 </p>
                              </div>


                  <div className='feature'>
                           <div className='feature1'>
                                  <h3>Multiple Platforms !</h3> <br/>
                                  <p>
                                  You can find social media platforms here
                                  like facebook and twitter, we have included these two famous
                                  social media platforms
                                  </p>
                           </div>  

                           <div className='feature2'>
                              <h3>Anywhere Anytime !</h3><br/>
                              <p>
                                  No need to switch between devices and accounts, we're available on all the devices.
                                  You can create your content anywhere on any device
                              </p>
                          </div>
                  </div>                   
                  </div>            
                
            {/* <section>
            <video src={smoke} autoPlay muted></video>
                <h1>
                    <span>S</span>
                    <span>O</span>
                    <span>C</span>
                    <span>I</span>
                    <span>O</span>
                </h1>
            </section> */}
          
          </div>
         );
    }
}
 
export default Home;