import { Box } from "@mui/system";
import React from "react";
import img from "../assets/always-job-search-1024x512.png";
import Details from "./Details";
import Typography from "@mui/material/Typography";
import FresherJob from "./FresherJob";

const Home = () => {
  return (
    <>
      <Box
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          color: "#f5f5f5",
          height: "100vh",
          marginTop: -10,
        }}
      >
        <Typography
          sx={{
            margin: "auto",

            paddingTop: 20,

            fontWeight: "bold",
            fontSize: 32,
            textAlign: "center",
          }}
        >
          <h3>Job Portal</h3>
          <h1 sx={{ fontWeight: "bold", fontSize: 32 }}>
            Your dream job is waiting.
          </h1>
        </Typography>
      </Box>
      <Details></Details>
      <FresherJob></FresherJob>
    </>
  );
};

export default Home;
