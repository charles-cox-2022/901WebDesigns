import logo from './logo.svg';
import './App.css';
import './resources/css/mainGrid.css';
import './resources/css/flex.css';
import './resources/css/general.css';
import './resources/css/nav.css'
//Libraries
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rapi from './modules/Rapi/rapi';

//Components

//Other
import profileIcon from './resources/images/Shanks.jpg'


function App() {

  
  const [contents, setContents] = useState(0);
  const dispatch = useDispatch();
  //let setting = useSelector((state) => state.setting.value);


  
return (
    <div className="App">
      <header id="grid-main" class="grey">
          <div class="grid-nav center textwhite flex-column"> 
            <h1>901 Web Designs</h1>
              <nav class="center">
                <a className='navButton' href='/about'>About</a>
                <a className='navButton' href='/contact'>Contact</a>
                <a className='navButton' href='/portfolio'>Portfolio</a>
              <a href="#">Services</a>
              <a href="#">Testimonials</a>
            </nav>
          </div>
          <img src={logo} className="App-logo grid-logo" alt="logo" />

        
        <div class="grid-left grey bubble">

        </div>
        <div class="grid-content center flex-left flex-column">
          <Rapi/>
          <p className='textwhite center padding25'>Designed by 901 Web Designs</p>
        </div>
        <div class="grid-right grey bubble">

        </div>
      </header>
    </div>
  );
}

export default App;
