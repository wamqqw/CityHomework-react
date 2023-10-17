import React from 'react';
import { Link } from 'react-router-dom'


const OtherPlaces = () => {
  const otherLandmarks = [
    {
      name: "Khan Shatyr",
      description: "'Khan Shatyr' is a large shopping and entertainment center in the capital of Kazakhstan, Astana.",
      image: "https://nur-sultan3d.kz/upload/000/u1/f/f/han-shatyr-photo-normal.jpg",
    },
    {
      name: "Abu Nasir al-Farabi (mosque)",
      description: "Abu Nasir al-Farabi is a mosque located in Astana. Before the opening of the mosque, Khazret Sultan was the largest mosque in Kazakhstan and Central Asia.",
      image: "https://astana.citypass.kz/wp-content/uploads/5c1a8ec4dd341.jpeg",
    },
  ];

  return (
    <div>
      <h1>Other Landmarks</h1>
      <div className="other-landmarks">
        {otherLandmarks.map((landmark, index) => (
          <div key={index} className="other-landmark">
            <h2>{landmark.name}</h2>
            <img src={landmark.image} alt={landmark.name} />
            <p>{landmark.description}</p>
          </div>
        ))}
        <button><Link to = "/">Next Page</Link></button>
      </div>
    </div>
  );
}

export default OtherPlaces;
