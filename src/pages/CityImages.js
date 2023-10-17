import React from 'react';
import { Link } from 'react-router-dom'


const CityImages = () => {
  const cityImages = [
    'https://images.unsplash.com/photo-1609779311020-db3879ad033a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80',
    'https://images.unsplash.com/photo-1666975823342-3b755b3784d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1683334086537-67830763518d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    'https://images.unsplash.com/photo-1684453728323-a8c2e5b615eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
  ];

  return (
    <div>
      <h1>Astana Photo's</h1>
      <div className="image-gallery">
        {cityImages.map((image, index) => (
          <img
            key={index}
            src={image}
            style={{width:"350px", height: "400px"}}
            alt={`City Image ${index + 1}`}
            className="city-image"
          />
        ))}
      </div>
      <button><Link to = '/FamousPlace'>Next page</Link></button>
    </div>
  );
}

export default CityImages;
