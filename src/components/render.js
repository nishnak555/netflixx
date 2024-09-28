import React from "react";
import CustomButton from "./button";
// import { AddCircle } from "@mui/icons-material";
import { Grid2 } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Faq from "./Faq";
import Navbar from "./Navbar";
export const Render = () => {
  return (
    <>
      <Grid2 spacing={3} container>
      <Grid2 item>
          <Navbar/>
        </Grid2>
        
        {/* <Grid2 item>
          <CustomButton colorType = "primary" onClick={()=>alert("clicked")}>
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
            colorType = "secondary"
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
        </Grid2> */
        <Grid2 item>
          <Faq question/>
        </Grid2> }
      </Grid2>
    </>
  );
};
