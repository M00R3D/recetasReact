import React from 'react';

function GalleryItem({ item }) {
  return (
    <div className="gallery-item">
      <img src={item.imageUrl} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  );
}

export default GalleryItem;
