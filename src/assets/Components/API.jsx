import React from 'react'
import { useState,useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const API = ({apiLink,apiName}) => {

    let[greet,setGreet] =useState([])

    useEffect(
        ()=>{

            async function Recipes() {
                let data = await fetch(`${apiLink}`)
                let get =  await data.json()


                setGreet(get[apiName])
                console.log(greet);
            }
            Recipes();
        
    },[])



  return (
<>
{
    greet.map((apiName) =>{
console.log(apiName);
console.log(apiName.id);
    })
}
</>
  )
}
 export default API