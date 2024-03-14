import React, { useState } from 'react';
import logo from './logo.png';
import './App.css';
import SearchBar from './Components/SearchBar.jsx';
import Gallery from './Components/Gallery'; 


function App() {
  const [setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
    //lógica para filtrar resultados según el término de búsqueda ingresado
  };

  const [galleryItems, setGalleryItems] = useState([
    { title: 'Elemento 1', imageUrl: 'https://via.placeholder.com/150', description: 'Descripción del elemento 1' },
    { title: 'Elemento 2', imageUrl: 'https://via.placeholder.com/150', description: 'Descripción del elemento 2' },
    { title: 'Elemento 3', imageUrl: 'https://via.placeholder.com/150', description: 'Descripción del elemento 3' },
    { title: 'Elemento 1', imageUrl: 'https://via.placeholder.com/150', description: 'Descripción del elemento 1' },
    { title: 'Elemento 2', imageUrl: 'https://via.placeholder.com/150', description: 'Descripción del elemento 2' },
    { title: 'Elemento 3', imageUrl: 'https://via.placeholder.com/150', description: 'Descripción del elemento 3' },
  ]);

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

      <div className='gallery-container'>
        <Gallery items={galleryItems} />
      </div>

    </div>
  );
}

export default App;
