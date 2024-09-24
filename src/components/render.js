import React from "react";
import CustomButton from "./button";
import { AddCircle, Description } from "@mui/icons-material";
import { Grid2 } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import info from "../utils/cardInfo"
import CustomCard from "./card";


export const Render = () => {
  const customStyles = [
    {
      card: {
        borderRadius: "1rem",
        background: "linear-gradient(149deg, #192247 0%, #210e17 96.86%)",
        width: "400px",
        height: "300px",
        position:"relative"
      },
      imageContainer: {    position: "absolute",
        bottom: 5,
        right: 5,
        width: { xs: 70, sm: 80, md: 100 },  // Responsive sizing
        height: "auto",
        // maxWidth: "30%",  // Prevents overflowing on small screens
        // maxHeight: "30%",  // Keep a balanced size on all screens
       
      },
      paragraph: {
        color: "rgba(255, 255, 255, 0.7)",
        fontSize: "1rem",
        fontWeight: 400,
      },

      typography: {
        fontWeight: 500,
        fontSize: "1.5rem",
        color: "white",
      },
  
    },
  ];
  return (
    <>
      {/* <Grid2 spacing={3} container>
        <Grid2 item>
          <CustomButton
            colorType="primary"
            onClick={() => console.log("Button clicked!")}
          >
            SignIn
          </CustomButton>
        </Grid2>
        <Grid2 item>
          <CustomButton
            customstyles={{
              "&:hover": {
                background: "#e50914",
              },
            }}
            colorType="secondary"
            endIcon={<ArrowForwardIosIcon />}
            onClick={() => console.log("Button clicked!")}
          >
            Get Started
          </CustomButton>
        </Grid2>
        <Grid2 item>
          <CustomButton onClick={() => console.log("Button clicked!")}>
            Use a sign-in code
          </CustomButton>
        </Grid2>
          </Grid2> */}
        <Grid2 item container spacing={2}>
          {info.map((item, index) => (
            <Grid2 item key={index}>
              <CustomCard styles={customStyles[0]} Info={item} />
            </Grid2>
          ))}
        </Grid2>
    </>
  );
};
