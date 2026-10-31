import React from 'react'

import API from './API.jsx'


export const Products = () => {
  return (
    <API  apiLink={'https://dummyjson.com/products'} apiName={'products'}/>
  )
}
export default Products