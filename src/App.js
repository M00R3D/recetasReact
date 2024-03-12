import React, { useState } from 'react';
import logo from './logo.png';
import './App.css';
import SearchBar from './Components/SearchBar.jsx';

function App() {
  const [setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
    //lógica para filtrar resultados según el término de búsqueda ingresado
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-Title">
          <div className="App-logo-container">
            <img src={logo} className="App-logo" alt='logo' />
          </div>
          <h1>Recetas de Cocina</h1>    
        </div>
        <SearchBar onSearch={handleSearch} /> 
      </header>
    </div>
  );
}

export default App;
