import React from 'react';
import './Home_Carosel.css'; // Import your CSS file

const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee">
        <div className="image-container">
          <img src="https://hardwareshack.in/wp-content/uploads/2020/08/asian-paints-500x500-1-247x247.jpg" alt="Image 1" />
          <p>Paint</p>
        </div>
        <div className="image-container">
          <img src="https://hardwareshack.in/wp-content/uploads/2020/09/prince-pipe-fitting-500x500-1-247x247.jpg" alt="Image 2" />
          <p>Pipe</p>
        </div>
        <div className="image-container">
          <img src="https://hardwareshack.in/wp-content/uploads/2020/07/download-17.jpg" alt="Image 3" />
          <p>Fan</p>
        </div>
        <div className="image-container">
          <img src="https://hardwareshack.in/wp-content/uploads/2020/09/ezgif.com-resize-4-1.png" alt="Image 3" />
          <p>Electrical items</p>
        </div>
        <div className="image-container">
          <img src="https://hardwareshack.in/wp-content/uploads/2020/07/download-2-3.jpg" alt="Image 3" />
          <p>Lights</p>
        </div>
        <div className="image-container">
          <img src="https://hardwareshack.in/wp-content/uploads/2020/07/91KACP3sxwL._SL1500_-247x247.jpg" alt="Image 3" />
          <p>MCB</p>
        </div>
        <div className="image-container">
          <img src="https://hardwareshack.in/wp-content/uploads/2020/08/ezgif.com-resize-8-247x247.jpg" alt="Image 3" />
          <p>Cements</p>
        </div>
        <div className="image-container">
          <img src="https://hardwareshack.in/wp-content/uploads/2020/08/81NNig8R2L._SL1500_-247x247.jpg" alt="Image 3" />
          <p>Power tools</p>
        </div>
        <div className="image-container">
          <img src="https://hardwareshack.in/wp-content/uploads/2020/07/download-17.jpg" alt="Image 3" />
          <p>Fan</p>
        </div>
        <div className="image-container">
          <img src="https://hardwareshack.in/wp-content/uploads/2020/07/images-3-247x247.jpeg" alt="Image 3" />
          <p>Adhesives</p>
        </div>
        {/* Add more images and their names as needed */}
      </div>
    </div>
  );
};

export default Marquee;
