import React from 'react'


import "./Hero.css"
export const Hero = () => {
  return (
    <section className="hero">

      {/* Left Content */}

      <div className="hero-content">

        <span className="hero-tag">
          ✦ YOUR DEVELOPER TOOLKIT
        </span>

        <h1>
          Explore APIs.
          <span> Discover Data.</span>
        </h1>

        <p>
          Welcome to APIverse — your one-stop platform
          to explore products, recipes and shopping cart
          data through powerful APIs.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Explore APIs →
          </button>

          <button className="secondary-btn">
            Learn More
          </button>
        </div>

        <div className="hero-info">
          <span>✓ Easy to Explore</span>
          <span>✓ Real API Data</span>
        </div>

      </div>


      {/* Right Dashboard Preview */}

      <div className="hero-dashboard">

        <div className="dashboard-header">
          <div>
            <h3>API Dashboard</h3>
            <p>Welcome back, Developer!</p>
          </div>

          <span className="live-status">
            ● LIVE
          </span>
        </div>


        <div className="dashboard-stats">

          <div className="stat-card purple">
            <span>📦</span>
            <p>Total Products</p>
            <h2>100+</h2>
          </div>

          <div className="stat-card orange">
            <span>🍕</span>
            <p>Total Recipes</p>
            <h2>50+</h2>
          </div>

          <div className="stat-card green">
            <span>🛒</span>
            <p>Total Carts</p>
            <h2>30+</h2>
          </div>

        </div>


        <div className="request-box">

          <h4>API Request Overview</h4>

          <div className="request-item">
            <div className="request-icon">📦</div>
            <div>
              <h5>Products API</h5>
              <p>/products</p>
            </div>
            <span className="success">GET</span>
          </div>

          <div className="request-item">
            <div className="request-icon">🍕</div>
            <div>
              <h5>Recipes API</h5>
              <p>/recipes</p>
            </div>
            <span className="success">GET</span>
          </div>

          <div className="request-item">
            <div className="request-icon">🛒</div>
            <div>
              <h5>Carts API</h5>
              <p>/carts</p>
            </div>
            <span className="success">GET</span>
          </div>

        </div>

      </div>

    </section>
  )
}
export default Hero