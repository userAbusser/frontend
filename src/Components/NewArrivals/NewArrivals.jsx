import React, { useEffect, useState } from 'react'
import './NewArrivals.css'
// import new_collection from '../Assets/new_collections'
import Item from '../items/item'
const NewArrivals = () => {
const [new_arrivals, setNew_arrivals] = useState([]);

useEffect(()=>{
fetch('http://localhost:4000/newarrivals')
.then((response)=>response.json())
.then((data)=>setNew_arrivals(data))
}, [])

  return (
    <div className='newarrivals'>
<h1>НОВИНКИ</h1>
<hr />
<div className="arrivals">
{new_arrivals.map((item,i)=>{
    return <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
}
)}
</div>
    </div>
  )
}

export default NewArrivals