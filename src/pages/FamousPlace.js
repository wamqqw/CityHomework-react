import React from 'react';
import { Link } from 'react-router-dom'

const FamousPlace = () => {
  const landmark = {
    name: "Bayterek",
    description: "The facility was commissioned according to the act of the State Commission in 2003. The height of the structure is 97 meters, with a ball crowning the structure - 102 meters. The diameter of the ball is 22 meters. The lower level goes four and a half meters underground, where cafes, aquariums and the Baiterek mini-gallery are located.",
    image: "https://images.unsplash.com/photo-1609776809645-ba9e2a4d12fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  };

  return (
    <div>
      <h1>Most Famous Landmark</h1>
      <div className="landmark-info">
        <div className="landmark-image">
          <img src={landmark.image} alt={landmark.name} style={{width: "300px"}} />
        </div>
        <div className="landmark-details">
          <h2>{landmark.name}</h2>
          <p>{landmark.description}</p>
        </div>
      </div>
      <button><Link to = "/Others">Next Page</Link></button>
    </div>
  );
}

export default FamousPlace;
