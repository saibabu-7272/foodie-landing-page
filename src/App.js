import LandingPage from './Pages/LandingPage';
import Header from './components/Header';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
     <LandingPage />
    </div>
  );
}

export default App;
