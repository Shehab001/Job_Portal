import React from "react";
import { Box, Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";

const TopCompany = () => {
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
            Top Company
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
              <Card sx={{ maxWidth: 345, p: 2 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://media.licdn.com/dms/image/C510BAQHKCVwP5bk8zg/company-logo_200_200/0/1575181976474?e=2147483647&v=beta&t=1_nZzQHxYXqHkonWE8NUCReqIwhZ8NNYy9-_mAX8CKE"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    TigerIT
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    TigerIT provides end-to-end credential management solutions
                    for government and state agencies. It combines state of the
                    art solution design, robust back-end systems with efficient
                    project management in a single turnkey solution for national
                    IT infrastructure undertakings.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View Details</Button>
                </CardActions>
              </Card>
            </Box>
            <Box
              sx={{
                "&:hover": { transform: "scale(1.1)" },
                transition: "1s",
              }}
            >
              <Card sx={{ maxWidth: 345, p: 2 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="http://techhubsouthflorida.org/wp-content/uploads/2021/04/BrainStation_Primary_Logo.png"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Brain Station 23
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    It was in 2006, with little capital but a pocketful of
                    belief our CEO, Raisul Kabir started Brain Station 23, a
                    software company, right after graduating from BUET. The new
                    company initially focused on the international market with
                    the local market added in 2010.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View Details</Button>
                </CardActions>
              </Card>
            </Box>
            <Box
              sx={{
                "&:hover": { transform: "scale(1.1)" },
                transition: "1s",
              }}
            >
              <Card sx={{ maxWidth: 345, p: 2 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="data:image/png;base64,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"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Kaz
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    We are the top software company in Bangladesh to hire
                    software developers for you. Finding great software talents
                    is difficult and time consuming. You need to be where the
                    talents are, advertise to the right audience, attract the
                    right people at the right time in their career.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View Details</Button>
                </CardActions>
              </Card>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default TopCompany;
