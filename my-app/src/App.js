import logo from './logo.svg';
import './App.scss';

import Header from './Components/Header/Header'
import HomePage from './Pages/HomePage/HomePage'

function App() {
  return (
    <div className="App">
        <Header />
      <header className="App-header">
        <HomePage />
      </header>
    </div>
  );
}

export default App;
