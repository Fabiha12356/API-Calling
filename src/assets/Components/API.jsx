import React from 'react'
import { useState,useEffect } from 'react'


export const API = () => {

    let[greet,setGreet] =useState("hy")


    useEffect(()=>{
        console.log("Working!")
    },[greet])

const chngeHead =()=>{
 setGreet("hy Fabiha")
}

  return (
<>
<h1>{greet}</h1>
<button onClick={chngeHead}>Click</button>
</>
  )
}
 export default API