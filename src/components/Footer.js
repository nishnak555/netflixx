import { Box, Container, Grid2, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CustomSelector from "./Selector";
import { useState } from "react";

const Footer = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const languages = [
    { value: "en", label: "English" },
    { value: "es", label: "Spanish" },
    { value: "fr", label: "French" },
  ];

  const footerData = [
    "FAQ",
    "Help Center",
    "Account",
    "Media Center",
    "Investor Relations",
    "Jobs",
    "Ways to Watch",
    "Terms of Use",
    "Privacy",
    "Cookie Preferences",
    "Corporate Information",
    "Contact Us",
    "Speed Test",
    "Legal Notice",
    "Only on Netflix",
  ];

  return (
    <footer>
      <Box
        sx={{
          backgroundColor: "black",
          width: "100%", // Make sure it occupies the full width of the screen
          padding: {
            xs: "20px", // Mobile padding
            sm: "40px", // Tablet padding
            md: "60px", // Desktop padding
          },
        }}
        mb={5}
      >
        {/* Call Section */}
        <Typography
          variant="body2"
          ml={10}
          sx={{
            color: "#808080",
            fontSize: {
              xs: "10px", // Small font size on mobile
              sm: "12px", // Larger on tablet
              md: "14px", // Full size on desktop
            },
            marginBottom: "16px",
            textAlign: { xs: "center", md: "left" }, // Centered on mobile
          }}
        >
          Questions? Call:
          <Link
            to="tel:000-800-919-1694"
            style={{
              color: "#808080",
              fontWeight: "initial",
              fontSize: "inherit", // Inherit from Typography size
            }}
          >
            {" "}
            000-800-919-1694
          </Link>
        </Typography>

        {/* Links Section */}
        <Grid2
          container
          spacing={2}
          mt={6}
          ml={10}
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          {footerData.map((item, index) => (
            <Grid2
              item
              key={item}
              size={2.5}
              xs={6} // Two columns on mobile
              sm={4} // Three columns on tablet
              md={2} // Six columns on desktop
            >
              <Link
                to="#"
                style={{
                  color: "#808080",
                  fontWeight: "initial",
                  fontSize: "inherit",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: {
                      xs: "10px", // Small font size on mobile
                      sm: "12px", // Larger on tablet
                      md: "14px", // Full size on desktop
                    },
                  }}
                >
                  {item}
                </Typography>
              </Link>
            </Grid2>
          ))}
        </Grid2>

        {/* Language Selector Section */}
        <Grid2
          ml={10}
          sx={{
            marginTop: "32px",
            marginBottom: "32px",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <CustomSelector
            options={languages}
            onChange={setSelectedLanguage}
            styled={{ BorderColor: "#808080" }}
          />
        </Grid2>

        {/* Footer Bottom Text */}
        <Grid2 sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Typography
            ml={10}
            sx={{
              color: "#808080",
              fontSize: {
                xs: "10px", // Smaller font on mobile
                sm: "12px", // Slightly larger on tablet
                md: "14px", // Normal size on desktop
              },
            }}
          >
            Netflix India
          </Typography>
        </Grid2>
      </Box>
    </footer>
  );
};

export default Footer;
