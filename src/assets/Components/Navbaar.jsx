import React from 'react'
import "./Navbaar.css"
import { Link } from 'react-router-dom'



export const Navbaar = () => {
  return (
     <nav className="navbar">

      <a href="#" className="logo">
        <span>API</span>verse.
      </a>

      <ul className="nav-links">
         <li><Link to="/">Home</Link></li>
  <li><Link to="/products">Products</Link></li>
  <li><Link to="/recipes">Recipes</Link></li>
  <li><Link to="/carts">Carts</Link></li>
      </ul>

      <button className="explore-btn">
        Explore APIs
      </button>

    </nav>
  )
}
export default Navbaar