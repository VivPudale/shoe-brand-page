import React from "react";

const Hero = () => {
  return (
    <>
      <main className="hero">
        <div className="content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div></div>
          <button>Shop Nows</button>
          <button>Category</button>
          <div className="shopping">
          <p>Also Available at</p>
          <div className="online shopping"></div>
            <img
              src="/images/flipkart.png"
              width="32px"
              height="32px"
              alt="flipkart logo"
            />
            <img
              src="/images/amazon.png"
              width="32px"
              height="32px"
              alt="amazon logo"
            />
          </div>
        </div>
        <div className="shoe-image">
          <img src="/images/shoe_image.png" alt="shoe image" />
        </div>
      </main>
    </>
  );
};

export default Hero;
