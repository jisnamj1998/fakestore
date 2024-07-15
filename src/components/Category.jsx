import React, { useEffect, useState } from 'react'

function Category({setCategory}) {    
    
    const[categories,setCategories]=useState()

    function getCategory(){                                        //async function getCategory(){


        fetch("https://fakestoreapi.com/products/categories").      //let response=await    fetch("https://fakestoreapi.com/products/categories")
        then(res=>res.json()).                                      //let data=await response.json()
        then(data=>setCategories(data))                               //console.log(data)
    }                                                                  //}

    useEffect(()=>{

        getCategory()

        
    },[])
  return (
     <div className='d-flex justify-content-evenly'>                
      {categories && categories.map((c,i)=>
      <div key={i}><button value={c} onClick={(e)=>setCategory(e.target.value)} className='btn btn-outline-dark'>{c}</button></div>)}  
    </div>
  )
}

export default Category