import React from 'react';
import GalleryItem from './GalleryItem';

function Gallery({ items }) {
  return (
    <div className="gallery">
      {items.map((item, index) => (
        <GalleryItem key={index} item={item} />
      ))}
    </div>
  );
}

export default Gallery;
