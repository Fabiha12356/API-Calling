import React from 'react'


import API from './API.jsx'
import RecipeUI from './RecipeUI.jsx'
export const Recipes = () => {
  return (
  <>
   <API  apiLink={'https://dummyjson.com/recipes'} apiName={'recipes'}/>
   <RecipeUI />
  </>
  )
}
export default Recipes