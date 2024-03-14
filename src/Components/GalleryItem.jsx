import React from 'react';

function GalleryItem({ item }) {
  return (
    <div className="gallery-item">
      <div className="item-content">
        <img src={item.imageUrl} alt={item.title} />
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </div>
  );
}

export default GalleryItem;
