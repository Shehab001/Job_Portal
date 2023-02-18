import { Box } from "@mui/system";
import React from "react";
import img from "../assets/always-job-search-1024x512.png";
import Details from "./Details";
import Typography from "@mui/material/Typography";
import FresherJob from "./FresherJob";
import ExperiencedJob from "./ExperiencedJob";
import TopCompany from "./TopCompany";

const Home = () => {
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
          sx={{
            margin: "auto",

            paddingTop: { xs: 20, sm: 30 },

            fontWeight: "bold",
            fontSize: 32,
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h3>Job Portal</h3>
          <h1 sx={{ fontWeight: "bold", fontSize: 32, pt: 5 }}>
            Your dream job is waiting.
          </h1>
        </Typography>
      </Box>
      <Details></Details>
      <FresherJob></FresherJob>
      <ExperiencedJob></ExperiencedJob>
      <TopCompany></TopCompany>
    </>
  );
};

export default Home;
