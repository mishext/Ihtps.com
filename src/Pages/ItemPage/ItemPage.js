import React from 'react'
import "./ItemPage.css"
import {useLocation } from 'react-router-dom';
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";




export default function ItemPage() {

    const {state} = useLocation();

    const handleDragStart = (e) => e.preventDefault();
  
  
  return (
    <div className="itemPageContainer" >
      
      <p className='productName'>{state.name}</p>

      <div className='infoContainer'>
      <div className='infoSmallContainer'>
           <p>Manufacturer: {state.manufacturer}</p>
           <hr className='hr'/>
           <p>Model: {state.model}</p>
           <hr className='hr'/>
           <p>Year: {state.year}</p>
           <hr className='hr'/>
           <p>Location: {state.location}</p>
           <hr className='hr'/>
           <button className='button'>CONTACT US</button>
         </div>
      <div className='ImageContainer'>
      <AliceCarousel
       infinite 
     
       >
      {state.img && state.img.map((e, key) => { 
        return(
         <img className='productImage' src={e} onDragStart={handleDragStart} role="presentation"/>  
         )})}
         </AliceCarousel>
         </div>
         
         </div>
    </div>
  )
}
