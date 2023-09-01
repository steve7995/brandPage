const HeroSection = () => {
  return (
    <div className="Hero">
      <div className="heroContent">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <h2>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </h2>

        <div className="heroButtons">
          <button>ShopNow</button>
          <button className="btn">Category</button>
        </div>
        <div className="shopping">

          <p>Also Available On</p>
          <div className="brandLogo">
            <img src="../public/amazon.png" alt="amzn" />
            <img src="../public/flipkart.png" alt="flkrt" />
          </div>
        </div>
      </div>

      <div className="heroLogo">
        <img src="../public/shoe_image.png" alt="nike" />
      </div>
    </div>
  );
};

export default HeroSection;
