import React, { useState } from "react";
import "./Machines.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import UsedLines from "../../Components/Machines/UsedLines.js";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Machines(props) {
  const { t } = useTranslation();
  // const [originalData, setOriginalData] =useState(MachinesFile.data)

  const [originalData, setOriginalData] = useState(UsedLines);

  const navigate = useNavigate();

  function toComponentB(item) {
    navigate(`/UsedLines/products/${item.endpoint}`, { state: item });
  }
  let lng = props.lang;
  return (
    <div className="UsedLinesContainer">
      <p className="usedLinesWord">{t("used_prod_w1")}</p>
      <div
        className={
          lng === "ar" ? "MachinesContainerRight" : "MachinesContainer"
        }
      >
        {originalData &&
          originalData.map((item, index) => {
            return (
              <div key={item.id}>
                <Card
                  className="CardContainer"
                  onClick={() => {
                    toComponentB(item);
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      key={index}
                      component="img"
                      image={item.img[0]}
                      alt="USED LINES"
                      className="CardImg"
                    />

                    <CardContent>
                      <p className="itemName">{item.name}</p>
                      {/* {item.details.map((det) => {
                      return (
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          className="detailsCard"
                        >
                          {det.p1}
                        </Typography>
                      );
                    })} */}
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
                      {t("checknow_w1")}
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
    </div>
  );
}
