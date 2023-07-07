import logo from './logo.svg';
import './App.css';
import './resources/css/mainGrid.css';
import './resources/css/flex.css';
import './resources/css/general.css';
import './resources/css/nav.css'

//Libraries
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSetting, Change } from './modules/redux/redux';

//Components
import Profile from './modules/profile/profile'
import Content from './modules/content/Content';
import Settings from './modules/settings/Settings';

//Other
import profileIcon from './resources/images/Shanks.jpg'


function App() {

  
  const [contents, setContents] = useState(0);
  const dispatch = useDispatch();
  let setting = useSelector((state) => state.setting.value);


  
return (
    <div className="App">
      <header id="grid-main" class="grey">
          <div class="grid-nav center textwhite flex-column"> 
            <h1>901 Web Designs</h1>
              <nav class="center">
                <button onClick={() => setContents(0)}>About Us</button>
                <button onClick={() => setContents(1)}>Portfolio</button>
              <a href="#">Services</a>
              <a href="#">Testimonials</a>
            </nav>
          </div>
          <img src={logo} className="App-logo grid-logo" alt="logo" />
          <Profile icon={profileIcon} />
        
        <div class="grid-left grey bubble">

        </div>
        <div class="grid-content center flex-left flex-column">
          <Content content={contents}/>
          <p className='textwhite center padding25'>Designed by 901 Web Designs</p>
        </div>
        <div class="grid-content center">
          <Settings content={setting}/>
        </div>
        <div class="grid-right grey bubble">

        </div>
      </header>
    </div>
  );
}

export default App;
