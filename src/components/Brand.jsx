import React from 'react';
import './Brand.css';

const Brand = ({ imageUrl, brandName }) => {
  return (
    <div className="brand-section">
      <h1 style={{textAlign:'center',color:'black'}}><b>BRANDS</b></h1>
      <div className="brand-card">
        <img src='https://tse4.mm.bing.net/th?id=OIP.O7vYv33JLwEc6nEgt8ExLgHaE7&pid=Api&P=0&h=180' alt={brandName} className="brand-image" />
        <img src='https://yt3.ggpht.com/a/AATXAJyV9_lEpYSJOqNyIrzNHr-X3NYqO_BteQZPVg=s900-c-k-c0xffffffff-no-rj-mo' alt={brandName} className="brand-image" />
        <img src='https://tse4.mm.bing.net/th?id=OIP.wg4Qejt9bDuZfsKBzoTrFgHaFj&pid=Api&P=0&h=180' alt={brandName} className="brand-image" />
        <img src='https://tse2.mm.bing.net/th?id=OIP.QTpuzfFvHP6gSH4739CZOAHaEK&pid=Api&P=0&h=180' alt={brandName} className="brand-image" />
        <img src='https://tse3.mm.bing.net/th?id=OIP.vyIzv74hS4-jGMplGIhKOwHaHa&pid=Api&P=0&h=180' alt={brandName} className="brand-image" />
        <img src='https://tse3.mm.bing.net/th?id=OIP.hbMDh8VMo_50paJiWKKo4wHaHa&pid=Api&P=0&h=180' alt={brandName} className="brand-image" />
      </div>
    </div>
  );
};

export default Brand;
