import React from 'react'
import { useState,useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const API = () => {

    let[greet,setGreet] =useState([])

    useEffect(
        ()=>{

            async function Recipes() {
                let data = await fetch('https://dummyjson.com/products')
                let get =  await data.json()


                setGreet(get.products)
                console.log(greet);
            }
            Recipes();
        
    },[])



  return (
<>
{
    greet.map((products)=>{
console.log(products);
console.log(products.title);
console.log(products.description);
console.log(products.category);
console.log(products.id);
  return  <div style={{
    display : "flex"
  }}>
    <div className="card" style={{
    width : "18rem"
  }}>
  <img src={products.images} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{products.id}</h5>
    <h5 className="card-title">{products.title}</h5>
    <h5 className="card-title">{products.category}</h5>
    <p className="card-text">{products.description}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
  </div>
    })
}
</>
  )
}
 export default API