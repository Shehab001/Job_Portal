import { Box, Container, fontWeight, textAlign } from "@mui/system";
import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

const FresherJob = () => {
  return (
    <>
      <Box>
        <Typography
          sx={{
            fontSize: { xs: 16, sm: 24 },
            mx: 7,
            textAlign: "center",

            opacity: 0.5,
            mb: 3,
          }}
        >
          Categories work wating for you
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: 36 },
            fontWeight: "bold",
            mx: 4,
            textAlign: "center",
            width: { xs: 300, sm: 500 },
            m: "auto",
          }}
        >
          Current Job Posts
        </Typography>
        <Container>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "block", sm: "auto auto auto" },
              mt: 5,
            }}
          >
            <Box
              sx={{
                border: 1,
                mt: { xs: 3, sm: "none" },
                ml: { xs: "none", sm: 5 },
                px: 5,
                py: 2,
                textAlign: "center",
                width: 300,
                m: "auto",
                "&:hover": { transform: "scale(1.1)" },
              }}
            >
              Web Developement
            </Box>
            <Box
              sx={{
                border: 1,
                mt: { xs: 3, sm: "none" },
                ml: { xs: "none", sm: 5 },
                px: 5,
                py: 2,
                textAlign: "center",
                width: 300,
                mx: "auto",
                "&:hover": { transform: "scale(1.1)" },
              }}
            >
              Graphic Designer
            </Box>
            <Box
              sx={{
                border: 1,
                mt: { xs: 3, sm: "none" },
                ml: { xs: "none", sm: 5 },
                px: 5,
                py: 2,
                textAlign: "center",
                width: 300,
                mx: "auto",
                "&:hover": { transform: "scale(1.1)" },
              }}
            >
              Multimedia
            </Box>
            <Box
              sx={{
                border: 1,
                mt: { xs: 3, sm: "none" },
                ml: { xs: "none", sm: 5 },
                px: 5,
                py: 2,
                textAlign: "center",
                width: 300,
                mx: "auto",
                "&:hover": { transform: "scale(1.1)" },
              }}
            >
              Advertising
            </Box>
            <Box
              sx={{
                border: 1,
                mt: { xs: 3, sm: "none" },
                ml: { xs: "none", sm: 5 },
                px: 5,
                py: 2,
                textAlign: "center",
                width: 300,
                mx: "auto",
                "&:hover": { transform: "scale(1.1)" },
              }}
            >
              Data Science
            </Box>
            <Box
              sx={{
                border: 1,
                mt: { xs: 3, sm: "none" },
                ml: { xs: "none", sm: 5 },
                px: 5,
                py: 2,
                textAlign: "center",
                width: 300,
                mx: "auto",
                "&:hover": { transform: "scale(1.1)" },
              }}
            >
              Data Mining
            </Box>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: { xs: 24, sm: 38 },
                fontWeight: "bold",
                textAlign: "center",
                mt: 10,
              }}
            >
              Fresher Jobs
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
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 34, fontWeight: "bold" }}
                      color="text.secondary"
                      gutterBottom
                    >
                      React Developer
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
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 34, fontWeight: "bold" }}
                      color="text.secondary"
                      gutterBottom
                    >
                      React Developer
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
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 34, fontWeight: "bold" }}
                      color="text.secondary"
                      gutterBottom
                    >
                      React Developer
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
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 34, fontWeight: "bold" }}
                      color="text.secondary"
                      gutterBottom
                    >
                      React Developer
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
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 34, fontWeight: "bold" }}
                      color="text.secondary"
                      gutterBottom
                    >
                      React Developer
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
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 34, fontWeight: "bold" }}
                      color="text.secondary"
                      gutterBottom
                    >
                      React Developer
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
      </Box>
    </>
  );
};

export default FresherJob;
