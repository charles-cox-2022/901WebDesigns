import logo from './logo.svg';
import './App.css';
import './resources/css/mainGrid.css';
import './resources/css/flex.css';
import './resources/css/general.css';
import './resources/css/nav.css'
import profileIcon from './resources/images/Shanks.jpg'

import AboutUs from './modules/aboutus/aboutus'

function App() {
  return (
    <div className="App">
      <header id="grid-main" class="grey">
        <div class="grid-top">
        </div>
          <nav class="grid-nav center textwhite flex-column">
            <h1>901 Web Designs</h1>
            <nav class="center">
              <a href="#">About Us</a>
              <a href="#">Portfolio</a>
              <a href="#">Services</a>
              <a href="#">Testimonials</a>

            </nav>

          </nav>
          <img src={logo} className="App-logo grid-logo" alt="logo" />
          <div class="grid-profile">
            <img id="profileImg" src={profileIcon} class="profileIcon" alt='profileIcon'/>
            <div class="center">
              <p id="txt_Username"class='center textwhite'>user</p>
              <button id="profileBtn" class="profileBtn">login</button>
            </div>
          </div>
        
        <div class="grid-left bisque bubble">

        </div>
        <div class="grid-content">
          <AboutUs/>
        </div>
        <div class="grid-right bisque bubble">

        </div>
      </header>
    </div>
  );
}

export default App;
