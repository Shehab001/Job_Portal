import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import img from "../assets/always-job-search-1024x512.png";
import ContactForm from "./ContactForm";

const ContacUs = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${img})`,
          backGroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          color: "#f5f5f5",
          height: { xs: "40vh", sm: "90vh" },
          mt: -6,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            position: "absolute",
            bottom: 30,
            left: 30,
            fontWeight: "bold",
            opacity: 0.7,
          }}
        >
          Contact Us
        </Typography>
      </Box>
      <Box sx={{ my: 10 }}>
        <ContactForm></ContactForm>
      </Box>
    </>
  );
};

export default ContacUs;
