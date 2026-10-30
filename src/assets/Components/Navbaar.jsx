import React from 'react'
import "./Navbaar.css"
export const Navbaar = () => {
  return (
     <nav className="navbar">

      <a href="#" className="logo">
        <span>API</span>verse.
      </a>

      <ul className="nav-links">
        <li><a href="#" className="active">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Recipes</a></li>
        <li><a href="#">Carts</a></li>
      </ul>

      <button className="explore-btn">
        Explore APIs
      </button>

    </nav>
  )
}
export default Navbaar