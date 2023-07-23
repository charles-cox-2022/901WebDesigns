import logo from './logo.svg';
import './App.css';
import './resources/css/mainGrid.css';
import './resources/css/flex.css';
import './resources/css/general.css';
import './resources/css/nav.css'
//Libraries
import Rapi from './modules/Rapi/rapi';
import { Link } from 'react-router-dom';
//Components

//Other


function App() {
  
return (
    <div className="App">
      <header id="grid-main" class="grey">
          <div class="grid-nav center textwhite flex-column"> 
            <h1>901 Web Designs</h1>
              <nav class="center">
                <Link className='navButton' to='/about'>About</Link>
                <Link className='navButton' to='/contact'>Contact</Link>
                <Link className='navButton' to='/portfolio'>Portfolio</Link>
                <Link className='navButton' to='/testimonials'>Testimonials</Link>
                <Link className='navButton' to='/services'>Services</Link>
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
