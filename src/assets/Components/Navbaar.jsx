import React from 'react'
import "./Navbaar.css"



import Recipes from './Recipes.jsx'
import Products from './Products.jsx'
import Carts from './Carts.jsx'
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