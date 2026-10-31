import React from 'react'


import API from './API.jsx'
export const Recipes = () => {
  return (
   <API  apiLink={'https://dummyjson.com/recipes'} apiName={'recipes'}/>
  )
}
export default Recipes