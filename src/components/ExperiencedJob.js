import { Box, Container } from "@mui/system";
import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

const ExperiencedJob = () => {
  return (
    <>
      <Container>
        <Box>
          <Typography
            sx={{
              fontSize: { xs: 24, sm: 38 },
              fontWeight: "bold",
              textAlign: "center",
              mt: 10,
            }}
          >
            Experienced Jobs
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "auto", sm: "auto auto auto" },
              my: 5,
              gap: 5,
            }}
            boxShadow={10}
          >
            <Box
              sx={{
                "&:hover": { transform: "scale(1.1)" },
                transition: "1s",
              }}
            >
              <Card sx={{ minWidth: 275, position: "relative" }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 34, fontWeight: "bold" }}
                    color="text.secondary"
                    gutterBottom
                  >
                    React Developer
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="50"
                      height="80"
                      viewBox="0 0 50 50"
                    >
                      <path d="M 17 5 C 14.250484 5 12 7.2504839 12 10 L 12 12 L 10 12 C 7.2504839 12 5 14.250484 5 17 L 5 40 C 5 42.749516 7.2504839 45 10 45 L 33 45 C 35.749516 45 38 42.749516 38 40 L 38 38 L 40 38 C 42.749516 38 45 35.749516 45 33 L 45 10 C 45 7.2504839 42.749516 5 40 5 L 17 5 z M 17 7 L 40 7 C 41.668484 7 43 8.3315161 43 10 L 43 33 C 43 34.668484 41.668484 36 40 36 L 38 36 L 36 36 L 17 36 C 15.331516 36 14 34.668484 14 33 L 14 23 C 14 21.883334 14.883334 21 16 21 L 19 21 L 19 27 C 19 29.197334 20.802666 31 23 31 L 29 31 L 31 31 L 34 31 C 36.197334 31 38 29.197334 38 27 L 38 17 C 38 14.250484 35.749516 12 33 12 L 14 12 L 14 10 C 14 8.3315161 15.331516 7 17 7 z M 10 14 L 12 14 L 14 14 L 33 14 C 34.668484 14 36 15.331516 36 17 L 36 27 C 36 28.116666 35.116666 29 34 29 L 31 29 L 31 23 C 31 20.802666 29.197334 19 27 19 L 21 19 L 19 19 L 16 19 C 13.802666 19 12 20.802666 12 23 L 12 33 C 12 35.749516 14.250484 38 17 38 L 36 38 L 36 40 C 36 41.668484 34.668484 43 33 43 L 10 43 C 8.3315161 43 7 41.668484 7 40 L 7 17 C 7 15.331516 8.3315161 14 10 14 z M 21 21 L 27 21 C 28.116666 21 29 21.883334 29 23 L 29 29 L 23 29 C 21.883334 29 21 28.116666 21 27 L 21 21 z"></path>
                    </svg>
                  </Typography>

                  <Typography variant="h6" component="div">
                    Facebook
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Western City,UK
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Apply</Button>
                </CardActions>
              </Card>
            </Box>
            <Box
              sx={{
                "&:hover": { transform: "scale(1.1)" },
                transition: "1s",
              }}
            >
              <Card sx={{ minWidth: 275, position: "relative" }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 34, fontWeight: "bold" }}
                    color="text.secondary"
                    gutterBottom
                  >
                    React Developer
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="50"
                      height="80"
                      viewBox="0 0 50 50"
                    >
                      <path d="M 17 5 C 14.250484 5 12 7.2504839 12 10 L 12 12 L 10 12 C 7.2504839 12 5 14.250484 5 17 L 5 40 C 5 42.749516 7.2504839 45 10 45 L 33 45 C 35.749516 45 38 42.749516 38 40 L 38 38 L 40 38 C 42.749516 38 45 35.749516 45 33 L 45 10 C 45 7.2504839 42.749516 5 40 5 L 17 5 z M 17 7 L 40 7 C 41.668484 7 43 8.3315161 43 10 L 43 33 C 43 34.668484 41.668484 36 40 36 L 38 36 L 36 36 L 17 36 C 15.331516 36 14 34.668484 14 33 L 14 23 C 14 21.883334 14.883334 21 16 21 L 19 21 L 19 27 C 19 29.197334 20.802666 31 23 31 L 29 31 L 31 31 L 34 31 C 36.197334 31 38 29.197334 38 27 L 38 17 C 38 14.250484 35.749516 12 33 12 L 14 12 L 14 10 C 14 8.3315161 15.331516 7 17 7 z M 10 14 L 12 14 L 14 14 L 33 14 C 34.668484 14 36 15.331516 36 17 L 36 27 C 36 28.116666 35.116666 29 34 29 L 31 29 L 31 23 C 31 20.802666 29.197334 19 27 19 L 21 19 L 19 19 L 16 19 C 13.802666 19 12 20.802666 12 23 L 12 33 C 12 35.749516 14.250484 38 17 38 L 36 38 L 36 40 C 36 41.668484 34.668484 43 33 43 L 10 43 C 8.3315161 43 7 41.668484 7 40 L 7 17 C 7 15.331516 8.3315161 14 10 14 z M 21 21 L 27 21 C 28.116666 21 29 21.883334 29 23 L 29 29 L 23 29 C 21.883334 29 21 28.116666 21 27 L 21 21 z"></path>
                    </svg>
                  </Typography>

                  <Typography variant="h6" component="div">
                    Facebook
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Western City,UK
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Apply</Button>
                </CardActions>
              </Card>
            </Box>
            <Box
              sx={{
                "&:hover": { transform: "scale(1.1)" },
                transition: "1s",
              }}
            >
              <Card sx={{ minWidth: 275, position: "relative" }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 34, fontWeight: "bold" }}
                    color="text.secondary"
                    gutterBottom
                  >
                    React Developer
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="50"
                      height="80"
                      viewBox="0 0 50 50"
                    >
                      <path d="M 17 5 C 14.250484 5 12 7.2504839 12 10 L 12 12 L 10 12 C 7.2504839 12 5 14.250484 5 17 L 5 40 C 5 42.749516 7.2504839 45 10 45 L 33 45 C 35.749516 45 38 42.749516 38 40 L 38 38 L 40 38 C 42.749516 38 45 35.749516 45 33 L 45 10 C 45 7.2504839 42.749516 5 40 5 L 17 5 z M 17 7 L 40 7 C 41.668484 7 43 8.3315161 43 10 L 43 33 C 43 34.668484 41.668484 36 40 36 L 38 36 L 36 36 L 17 36 C 15.331516 36 14 34.668484 14 33 L 14 23 C 14 21.883334 14.883334 21 16 21 L 19 21 L 19 27 C 19 29.197334 20.802666 31 23 31 L 29 31 L 31 31 L 34 31 C 36.197334 31 38 29.197334 38 27 L 38 17 C 38 14.250484 35.749516 12 33 12 L 14 12 L 14 10 C 14 8.3315161 15.331516 7 17 7 z M 10 14 L 12 14 L 14 14 L 33 14 C 34.668484 14 36 15.331516 36 17 L 36 27 C 36 28.116666 35.116666 29 34 29 L 31 29 L 31 23 C 31 20.802666 29.197334 19 27 19 L 21 19 L 19 19 L 16 19 C 13.802666 19 12 20.802666 12 23 L 12 33 C 12 35.749516 14.250484 38 17 38 L 36 38 L 36 40 C 36 41.668484 34.668484 43 33 43 L 10 43 C 8.3315161 43 7 41.668484 7 40 L 7 17 C 7 15.331516 8.3315161 14 10 14 z M 21 21 L 27 21 C 28.116666 21 29 21.883334 29 23 L 29 29 L 23 29 C 21.883334 29 21 28.116666 21 27 L 21 21 z"></path>
                    </svg>
                  </Typography>

                  <Typography variant="h6" component="div">
                    Facebook
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Western City,UK
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Apply</Button>
                </CardActions>
              </Card>
            </Box>
            <Box
              sx={{
                "&:hover": { transform: "scale(1.1)" },
                transition: "1s",
              }}
            >
              <Card sx={{ minWidth: 275, position: "relative" }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 34, fontWeight: "bold" }}
                    color="text.secondary"
                    gutterBottom
                  >
                    React Developer
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="50"
                      height="80"
                      viewBox="0 0 50 50"
                    >
                      <path d="M 17 5 C 14.250484 5 12 7.2504839 12 10 L 12 12 L 10 12 C 7.2504839 12 5 14.250484 5 17 L 5 40 C 5 42.749516 7.2504839 45 10 45 L 33 45 C 35.749516 45 38 42.749516 38 40 L 38 38 L 40 38 C 42.749516 38 45 35.749516 45 33 L 45 10 C 45 7.2504839 42.749516 5 40 5 L 17 5 z M 17 7 L 40 7 C 41.668484 7 43 8.3315161 43 10 L 43 33 C 43 34.668484 41.668484 36 40 36 L 38 36 L 36 36 L 17 36 C 15.331516 36 14 34.668484 14 33 L 14 23 C 14 21.883334 14.883334 21 16 21 L 19 21 L 19 27 C 19 29.197334 20.802666 31 23 31 L 29 31 L 31 31 L 34 31 C 36.197334 31 38 29.197334 38 27 L 38 17 C 38 14.250484 35.749516 12 33 12 L 14 12 L 14 10 C 14 8.3315161 15.331516 7 17 7 z M 10 14 L 12 14 L 14 14 L 33 14 C 34.668484 14 36 15.331516 36 17 L 36 27 C 36 28.116666 35.116666 29 34 29 L 31 29 L 31 23 C 31 20.802666 29.197334 19 27 19 L 21 19 L 19 19 L 16 19 C 13.802666 19 12 20.802666 12 23 L 12 33 C 12 35.749516 14.250484 38 17 38 L 36 38 L 36 40 C 36 41.668484 34.668484 43 33 43 L 10 43 C 8.3315161 43 7 41.668484 7 40 L 7 17 C 7 15.331516 8.3315161 14 10 14 z M 21 21 L 27 21 C 28.116666 21 29 21.883334 29 23 L 29 29 L 23 29 C 21.883334 29 21 28.116666 21 27 L 21 21 z"></path>
                    </svg>
                  </Typography>

                  <Typography variant="h6" component="div">
                    Facebook
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Western City,UK
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Apply</Button>
                </CardActions>
              </Card>
            </Box>
            <Box
              sx={{
                "&:hover": { transform: "scale(1.1)" },
                transition: "1s",
              }}
            >
              <Card sx={{ minWidth: 275, position: "relative" }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 34, fontWeight: "bold" }}
                    color="text.secondary"
                    gutterBottom
                  >
                    React Developer
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="50"
                      height="80"
                      viewBox="0 0 50 50"
                    >
                      <path d="M 17 5 C 14.250484 5 12 7.2504839 12 10 L 12 12 L 10 12 C 7.2504839 12 5 14.250484 5 17 L 5 40 C 5 42.749516 7.2504839 45 10 45 L 33 45 C 35.749516 45 38 42.749516 38 40 L 38 38 L 40 38 C 42.749516 38 45 35.749516 45 33 L 45 10 C 45 7.2504839 42.749516 5 40 5 L 17 5 z M 17 7 L 40 7 C 41.668484 7 43 8.3315161 43 10 L 43 33 C 43 34.668484 41.668484 36 40 36 L 38 36 L 36 36 L 17 36 C 15.331516 36 14 34.668484 14 33 L 14 23 C 14 21.883334 14.883334 21 16 21 L 19 21 L 19 27 C 19 29.197334 20.802666 31 23 31 L 29 31 L 31 31 L 34 31 C 36.197334 31 38 29.197334 38 27 L 38 17 C 38 14.250484 35.749516 12 33 12 L 14 12 L 14 10 C 14 8.3315161 15.331516 7 17 7 z M 10 14 L 12 14 L 14 14 L 33 14 C 34.668484 14 36 15.331516 36 17 L 36 27 C 36 28.116666 35.116666 29 34 29 L 31 29 L 31 23 C 31 20.802666 29.197334 19 27 19 L 21 19 L 19 19 L 16 19 C 13.802666 19 12 20.802666 12 23 L 12 33 C 12 35.749516 14.250484 38 17 38 L 36 38 L 36 40 C 36 41.668484 34.668484 43 33 43 L 10 43 C 8.3315161 43 7 41.668484 7 40 L 7 17 C 7 15.331516 8.3315161 14 10 14 z M 21 21 L 27 21 C 28.116666 21 29 21.883334 29 23 L 29 29 L 23 29 C 21.883334 29 21 28.116666 21 27 L 21 21 z"></path>
                    </svg>
                  </Typography>

                  <Typography variant="h6" component="div">
                    Facebook
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Western City,UK
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Apply</Button>
                </CardActions>
              </Card>
            </Box>
            <Box
              sx={{
                "&:hover": { transform: "scale(1.1)" },
                transition: "1s",
              }}
            >
              <Card sx={{ minWidth: 275, position: "relative" }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 34, fontWeight: "bold" }}
                    color="text.secondary"
                    gutterBottom
                  >
                    React Developer
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="50"
                      height="80"
                      viewBox="0 0 50 50"
                    >
                      <path d="M 17 5 C 14.250484 5 12 7.2504839 12 10 L 12 12 L 10 12 C 7.2504839 12 5 14.250484 5 17 L 5 40 C 5 42.749516 7.2504839 45 10 45 L 33 45 C 35.749516 45 38 42.749516 38 40 L 38 38 L 40 38 C 42.749516 38 45 35.749516 45 33 L 45 10 C 45 7.2504839 42.749516 5 40 5 L 17 5 z M 17 7 L 40 7 C 41.668484 7 43 8.3315161 43 10 L 43 33 C 43 34.668484 41.668484 36 40 36 L 38 36 L 36 36 L 17 36 C 15.331516 36 14 34.668484 14 33 L 14 23 C 14 21.883334 14.883334 21 16 21 L 19 21 L 19 27 C 19 29.197334 20.802666 31 23 31 L 29 31 L 31 31 L 34 31 C 36.197334 31 38 29.197334 38 27 L 38 17 C 38 14.250484 35.749516 12 33 12 L 14 12 L 14 10 C 14 8.3315161 15.331516 7 17 7 z M 10 14 L 12 14 L 14 14 L 33 14 C 34.668484 14 36 15.331516 36 17 L 36 27 C 36 28.116666 35.116666 29 34 29 L 31 29 L 31 23 C 31 20.802666 29.197334 19 27 19 L 21 19 L 19 19 L 16 19 C 13.802666 19 12 20.802666 12 23 L 12 33 C 12 35.749516 14.250484 38 17 38 L 36 38 L 36 40 C 36 41.668484 34.668484 43 33 43 L 10 43 C 8.3315161 43 7 41.668484 7 40 L 7 17 C 7 15.331516 8.3315161 14 10 14 z M 21 21 L 27 21 C 28.116666 21 29 21.883334 29 23 L 29 29 L 23 29 C 21.883334 29 21 28.116666 21 27 L 21 21 z"></path>
                    </svg>
                  </Typography>

                  <Typography variant="h6" component="div">
                    Facebook
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Western City,UK
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Apply</Button>
                </CardActions>
              </Card>
            </Box>
          </Box>
        </Box>
        <Box m={1} display="flex" justifyContent="center" alignItems="center">
          <Button variant="contained" color="primary" sx={{ height: 40 }}>
            See All
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default ExperiencedJob;
