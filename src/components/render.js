import React from "react";
import CustomButton from "./button";
import { AddCircle } from "@mui/icons-material";
import { Grid2 } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CustomSelector from "./Selector";
import Footer from "./Footer";
import { useState } from "react";
export const Render = () => {

  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const languages = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Spanish' },
    { value: 'fr', label: 'French' },
    // Add more languages as needed
  ];

  return (
    <>
      <Grid2 spacing={3} container>

        <Grid2 item>
          <CustomButton colorType = "primary" onClick={() => console.log("Button clicked!")}>
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
        </Grid2>
      </Grid2>

      <CustomSelector options={languages} onChange={setSelectedLanguage}/>

      <Footer colorType = "primary"/>
    </>
  );
};
