import React from "react";

import { Box, Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import img from "../assets/always-job-search-1024x512.png";
import { Avatar } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const About = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
          About Us
        </Typography>
      </Box>
      <Container sx={{ mb: 10 }}>
        <Box>
          <Typography
            sx={{
              fontSize: { xs: 24, sm: 38 },
              fontWeight: "bold",
              textAlign: "center",
              mt: 10,
            }}
          >
            Happy Clients
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
                width: "100%",
                m: "auto",
                "&:hover": { transform: "scale(1.1)" },
                transition: "1s",
              }}
            >
              <Card sx={{ maxWidth: 345, p: 2 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Svycu4FS4ycKWT6_UV6PTlx1HHwKkyxLmg&usqp=CAU"
                  sx={{ width: 156, height: 156, ml: 10 }}
                />
                <CardContent>
                  <Typography sx={{ mb: 5 }}>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    Olivia Wilde
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    System Analysis
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Box
              sx={{
                width: "100%",
                m: "auto",
                "&:hover": { transform: "scale(1.1)" },
                transition: "1s",
              }}
            >
              <Card sx={{ maxWidth: 345, p: 2 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Svycu4FS4ycKWT6_UV6PTlx1HHwKkyxLmg&usqp=CAU"
                  sx={{ width: 156, height: 156, ml: 10 }}
                />
                <CardContent>
                  <Typography sx={{ mb: 5 }}>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    Olivia Wilde
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    System Analysis
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Box
              sx={{
                width: "100%",
                m: "auto",
                "&:hover": { transform: "scale(1.1)" },
                transition: "1s",
              }}
            >
              <Card sx={{ maxWidth: 345, p: 2 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Svycu4FS4ycKWT6_UV6PTlx1HHwKkyxLmg&usqp=CAU"
                  sx={{ width: 156, height: 156, ml: 10 }}
                />
                <CardContent>
                  <Typography sx={{ mb: 5 }}>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    Olivia Wilde
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    System Analysis
                  </Typography>
                </CardContent>
              </Card>
            </Box>
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
            FAQ
          </Typography>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                General settings
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                I am an accordion
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Users
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                You are currently not an owner
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Donec placerat, lectus sed mattis semper, neque lectus feugiat
                lectus, varius pulvinar diam eros in elit. Pellentesque
                convallis laoreet laoreet.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Advanced settings
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Filtering has been entirely disabled for whole web server
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Personal data
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </>
  );
};

export default About;
