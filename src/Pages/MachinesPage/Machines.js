import React, {useState} from 'react'
import "./Machines.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import MachinesFile from "../../Components/Machines/MachinesFile.json"
import {Link, useNavigate, useLocation } from 'react-router-dom';
import { useHistory } from "react-router-dom";



export default function Machines(props) {
  const [originalData, setOriginalData] =useState(MachinesFile.data)


  const navigate = useNavigate();
  
  function toComponentB(item){
    navigate('/itemPage', {state: item});
      }

     

  return (
    <div className='MachinesContainer'>  

    {originalData.map((item, index) => {
      return(
    <div key={item.id}>
     <Card sx={{ maxWidth: 345 }} >
        <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={item.img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.details}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary" onClick={() => {
        toComponentB(item.id)
      }}
      
      >
        Check Now
      </Button>
      {/* <Link to={{
        pathname: `/itemPage`,
        state: {originalData}
      }} >Click here</Link> */}
    </CardActions>
  </Card>
  </div>
   )})}   
  </div>
  )
}
