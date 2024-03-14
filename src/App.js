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
    { 
      title: 'Papas con Queso', 
      imageUrl: 'https://via.placeholder.com/150', 
      description: 'Deliciosas papas horneadas cubiertas de queso derretido.' 
    },
    { 
      title: 'Pizza de Queso', 
      imageUrl: 'https://via.placeholder.com/150', 
      description: 'Pizza recién horneada con una abundante capa de queso.' 
    },
    { 
      title: 'Macarrones con Queso', 
      imageUrl: 'https://via.placeholder.com/150', 
      description: 'Pasta con una cremosa salsa de queso cheddar.' 
    },
    { 
      title: 'Nachos con Queso', 
      imageUrl: 'https://via.placeholder.com/150', 
      description: 'Nachos cubiertos de queso fundido y guarniciones.' 
    },
    { 
      title: 'Sándwich de Queso a la Parrilla', 
      imageUrl: 'https://via.placeholder.com/150', 
      description: 'Pan crujiente relleno de queso derretido y dorado.' 
    },
    { 
      title: 'Ensalada de Queso de Cabra', 
      imageUrl: 'https://via.placeholder.com/150', 
      description: 'Ensalada fresca con queso de cabra y aderezo de vinagreta.' 
    },
    { 
      title: 'Papas con Queso', 
      imageUrl: 'https://via.placeholder.com/150', 
      description: 'Deliciosas papas horneadas cubiertas de queso derretido.' 
    },
    { 
      title: 'Tacos al Pastor', 
      imageUrl: 'https://via.placeholder.com/150', 
      description: 'Tacos de carne de cerdo marinada, servidos con piña y cebolla.' 
    },
    { 
      title: 'Chiles Rellenos', 
      imageUrl: 'https://via.placeholder.com/150', 
      description: 'Chiles poblanos rellenos de queso y bañados en salsa de tomate.' 
    },
    { 
      title: 'Enchiladas Verdes', 
      imageUrl: 'https://via.placeholder.com/150', 
      description: 'Tortillas de maíz rellenas de pollo y cubiertas con salsa verde y queso.' 
    },
    { 
      title: 'Guacamole', 
      imageUrl: 'https://via.placeholder.com/150', 
      description: 'Puré de aguacate con tomate, cebolla, cilantro y limón.' 
    },
    { 
      title: 'Tamales', 
      imageUrl: 'https://via.placeholder.com/150', 
      description: 'Masa de maíz rellena de carne o verduras, envuelta en hojas de maíz.' 
    }
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
