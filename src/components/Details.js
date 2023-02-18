import { Box, Container } from "@mui/system";
import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddchartIcon from "@mui/icons-material/Addchart";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

const Details = () => {
  return (
    <div>
      <Container>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "block", sm: "auto auto auto" },
            mt: 10,
            ml: { xs: 5, sm: 10 },
            mb: 10,
          }}
        >
          <Box sx={{ width: 300 }}>
            <CardContent>
              <ManageSearchIcon
                sx={{
                  fontSize: 100,
                  "&:hover": { transform: "rotate(40deg)" },
                }}
              ></ManageSearchIcon>
              <Typography
                sx={{ fontSize: 24, fontWeight: "bold", mb: 1 }}
                color="black"
                gutterBottom
              >
                Search Million Of Jobs
              </Typography>
              <Typography variant="h5" component="div"></Typography>
              <Typography sx={{ mb: 1.5 }} color="black">
                A small river named Duden flows by their place and supplies.
              </Typography>
            </CardContent>
          </Box>
          <Box sx={{ width: 300 }}>
            {" "}
            <CardContent>
              <AddchartIcon
                sx={{
                  fontSize: 100,
                  "&:hover": { transform: "rotate(40deg)" },
                }}
              ></AddchartIcon>
              <Typography
                sx={{ fontSize: 24, fontWeight: "bold", mb: 1 }}
                color="black"
                gutterBottom
              >
                Easy To Manage Jobs
              </Typography>
              <Typography variant="h5" component="div"></Typography>
              <Typography sx={{ mb: 1.5 }} color="black">
                A small river named Duden flows by their place and supplies.
              </Typography>
            </CardContent>
          </Box>
          <Box sx={{ width: 300 }}>
            <CardContent>
              <ManageAccountsIcon
                sx={{
                  fontSize: 100,
                  "&:hover": { transform: "rotate(40deg)" },
                }}
              ></ManageAccountsIcon>
              <Typography
                sx={{ fontSize: 24, fontWeight: "bold", mb: 1 }}
                color="black"
                gutterBottom
              >
                Top Careers
              </Typography>
              <Typography variant="h5" component="div"></Typography>
              <Typography sx={{ mb: 1.5 }} color="black">
                A small river named Duden flows by their place and supplies.
              </Typography>
            </CardContent>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Details;
