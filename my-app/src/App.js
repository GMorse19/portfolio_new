import logo from './logo.svg';
import './App.scss';

import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

import HomePage from './Pages/HomePage/HomePage'
import Portfolio from './Pages/Portfolio/Portfolio'

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <HomePage />
        <Portfolio />
        <Footer />
      </header>
    </div>
  );
}

export default App;
