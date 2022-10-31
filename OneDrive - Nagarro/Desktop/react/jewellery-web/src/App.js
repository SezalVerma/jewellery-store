import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div id="webpage">
       <Router>
         <HeaderComponent />
         <FooterComponent />
       </Router>
    </div>
  );
}

export default App;
