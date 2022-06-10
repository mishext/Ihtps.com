import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import car from "../../Images/cars.png";
import Service1 from "../../Images/services.jpg";
import Service2 from "../../Images/test6.jpg";
import Service3 from "../../Images/services3.jpg";
import "./Services.css";

export default function Services() {
  return (
    <div className="ServicesContainer">
      <p className="ServicesP">
        <span>OUR</span> SERVCES
      </p>
      <div className="CardsContainer">
        <Card className="Card">
          <CardActionArea>
            <CardMedia
              component="img"
              className="cardImg"
              // height="140"
              image={Service1}
              alt="green iguana"
            />
            <CardContent>
              <Typography className="MainService" component="div">
                Engineering
              </Typography>
              {/* <Typography className="descService" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography> */}
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className="Card">
          <CardActionArea>
            <CardMedia
              component="img"
              className="cardImg"
              image={Service2}
              alt="green iguana"
            />
            <CardContent>
              <Typography className="MainService" component="div">
                Procurement
              </Typography>
              {/* <Typography className="descService" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography> */}
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className="Card">
          <CardActionArea>
            <CardMedia
              component="img"
              className="cardImg"
              image={Service3}
              alt="green iguana"
            />
            <CardContent>
              <Typography component="div" className="MainService">
                Contractor
              </Typography>
              {/* <Typography className="descService" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography> */}
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}
