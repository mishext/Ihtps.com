import React, { useState } from "react";
import "./Machines.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

import UsedLines from "../../Components/Machines/UsedLines.js";
import { useNavigate } from "react-router-dom";

export default function Machines() {
  // const [originalData, setOriginalData] =useState(MachinesFile.data)

  const [originalData, setOriginalData] = useState(UsedLines);

  const navigate = useNavigate();

  function toComponentB(item) {
    navigate("/itemPage", { state: item });
  }

  return (
    <div className="MachinesContainer">
      {originalData &&
        originalData.map((item, index) => {
          return (
            <div key={item.id}>
              <Card className="CardContainer">
                <CardActionArea>
                  <CardMedia
                    key={index}
                    component="img"
                    image={item.img[0]}
                    alt="USED LINES"
                    className="CardImg"
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
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => {
                      toComponentB(item);
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
          );
        })}
    </div>
  );
}
