import React from 'react'


import "./RecipeUI.css"

export const RecipeUI = () => {
  return (
   <>
    <div className="recipes-container">

      <div className="recipes-heading">
        <h2>Explore Recipes</h2>
        <p>Discover delicious recipes from around the world.</p>
      </div>

      <div className="recipes-grid">

        {/* Recipe Card */}
        <div className="recipe-card">

          <div className="recipe-image">
            <img
              src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400"
              alt="Pasta"
            />
          </div>

          <div className="recipe-content">

            <span className="recipe-category">Italian Cuisine</span>

            <h3>Creamy Garlic Pasta</h3>

            <div className="recipe-info">
              <span>⏱ 25 min</span>
              <span>👨‍🍳 Easy</span>
              <span>🍽 2 Servings</span>
            </div>

            <p className="recipe-description">
              A delicious creamy pasta made with garlic, cheese and fresh cream.
            </p>

            <button className="recipe-btn">
              View Recipe
            </button>

          </div>
        </div>


        {/* Second Recipe */}
        <div className="recipe-card">

          <div className="recipe-image">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400"
              alt="Salad"
            />
          </div>

          <div className="recipe-content">

            <span className="recipe-category">Healthy Food</span>

            <h3>Fresh Vegetable Salad</h3>

            <div className="recipe-info">
              <span>⏱ 15 min</span>
              <span>👨‍🍳 Easy</span>
              <span>🍽 3 Servings</span>
            </div>

            <p className="recipe-description">
              A fresh and healthy salad with colorful vegetables.
            </p>

            <button className="recipe-btn">
              View Recipe
            </button>

          </div>
        </div>

      </div>
    </div>
   </>
  )
}

export default RecipeUI