import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact Us"];
const link = ["home", "about", "contactus"];

function DrawerAppBar(props) {
  let x = 0;
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [alignment, setAlignment] = React.useState("Job Seeker");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6">MUI</Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItemButton sx={{ textAlign: "center" }}>
          <ListItemText primary="Sign In" />
        </ListItemButton>
        <ListItemButton sx={{ textAlign: "center" }}>
          <ListItemText primary="Sign Out" />
        </ListItemButton>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                <Link
                  to={link[x++]}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {item}
                </Link>
              </Button>
            ))}
            <Link to="signup" style={{ color: "#fff", marginRight: 220 }}>
              Sign Up
            </Link>
            <Link to="signin" style={{ color: "#fff", marginRight: 220 }}>
              Sign In
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <ToggleButtonGroup
        sx={{
          position: "fixed",
          top: { xs: 13, sm: 5 },
          right: 10,
          zIndex: 1300,
          height: { xs: 5, sm: "auto" },
          color: "#fff",
        }}
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton sx={{ color: "#fff" }} value="Job Seeker">
          Job Seeker
        </ToggleButton>
        <ToggleButton sx={{ color: "#fff" }} value="Job Poster">
          Job Poster
        </ToggleButton>
      </ToggleButtonGroup>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        {/* <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        </Typography> */}
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;

//export default Navbar;
