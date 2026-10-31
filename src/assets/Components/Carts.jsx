import React from 'react'


import API from './API.jsx'
export const Carts = () => {
  return (
    <API  apiLink={'https://dummyjson.com/carts'} apiName={'carts'}/>
  )
}
export default Carts