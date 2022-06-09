import React from 'react'
import "./ItemPage.css"
import {useLocation,useParams } from 'react-router-dom';


export default function ItemPage() {

  // const { item } = useParams();
  // console.log(item)

    // console.log(navigate, "navigatioooon");

    // const { state } = useParams();
    // console.log(state,"state")
    const {state} = useLocation();
    // console.log(state.item)
    // console.log(location, "location");

  
  return (
    <div className="itemPageContainer" >
      
      <p>Here is the item</p>
        {/* {/* <img src={location.item.img} /> */}
        {/* <p>{state.item.name}</p>  */}
    </div>
  )
}
