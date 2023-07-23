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
import Nav from './modules/Nav/nav';
//Other


function App() {
  
return (
    <div className="App">
      <header id="grid-main" class="grey">
          <Nav/>
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
