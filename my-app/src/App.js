import logo from './logo.svg';
import './App.scss';

import Header from './Components/Header/Header'
import HomePage from './Pages/HomePage/HomePage'
import Portfolio from './Pages/Portfolio/Portfolio'

function App() {
  return (
    <div className="App">
        <Header />
      <header className="App-header">
        <HomePage />
        <Portfolio />
      </header>
    </div>
  );
}

export default App;
