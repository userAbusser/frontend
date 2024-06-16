import React, { useEffect, useState } from 'react'
import './popular.css'
// import data_product from '../Assets/data'
import Item from '../items/item'
const Popular = () => {
const [popularProducts, setPopular] = useState([]);

useEffect(()=>{
fetch('https://diplom-cbqv.onrender.com/popular')
.then((response)=>response.json())
.then((data)=>setPopular(data));
},[])


  return (
    <div className='popular'>
     <h1>ПОПУЛЯРНІ ТОВАРИ</h1>
     <hr/>
     <div className="popular-item">
        {popularProducts.map((item)=>{
            return <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
     </div>
    </div>
  )
}

export default Popular;