import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Icon,
  Typography,
} from "@mui/material";
import React from "react";
import { ReactComponent as TelevisionIcon } from "../assets/images/television.svg";

export const CustomCard = (props) => {
  const { Info, styles = {}, ...other } = props;
  const { title, Description, image } = Info;

  return (
    <>
      <Card sx={{ ...styles.card }}>
        <CardContent>
          <Typography sx={{ ...styles.typography }}>{title}</Typography>
          <Typography sx={{ ...styles.paragraph }}>{Description}</Typography>
        </CardContent>
        <CardMedia sx={{ ...styles.imageContainer }}>{image}</CardMedia>
      </Card>
    </>
  );
};

export default CustomCard;
