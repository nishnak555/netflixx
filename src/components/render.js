import React from "react";
import CustomButton from "./button";
import { AddCircle } from "@mui/icons-material";
import { Grid2 } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export const Render = () => {
  return (
    <>
      <Grid2 spacing={3} container>
        <Grid2 item>
          <CustomButton onClick={() => console.log("Button clicked!")}>
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
      </Grid2>
    </>
  );
};
