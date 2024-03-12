import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-Title">
          <div className="App-logo-container">
            <img src={logo} className="App-logo" alt='logo' />
          </div>
          <h1>Recetas de Cocina</h1>    
        </div>
      </header>
    </div>
  );
}

export default App;
