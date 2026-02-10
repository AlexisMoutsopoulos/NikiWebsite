import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";

// Brand + tab icons (feel free to swap these)
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { theme } from "./Theme";
import { Padding } from "@mui/icons-material";

const links = [
  { label: "About", to: "/about", Icon: InfoOutlinedIcon },
  { label: "Products", to: "/products", Icon: ShoppingBagOutlinedIcon },
  { label: "Contact", to: "/contact", Icon: MailOutlineIcon },
];

const useStyles = makeStyles(() => ({
  appBar: {
    background: "linear-gradient(90deg, #c9b07f79 0%, #d4bd90 45%, #efe3cc 100%) !important",
    boxShadow: "0 10px 25px rgba(0,0,0,.10) !important",
  },

  icon: {
    width: 20,
    height: 20
  },

  toolbar: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      gap: 12,
      padding: "14px 12px",
      alignItems: "center",
      minHeight: "auto",
    },
  },

  brandContainer: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    paddingLeft: 12,
  },

  brand: {
    display: "flex",
    fontFamily: "monospace",
    fontWeight: 800,
    letterSpacing: ".26rem",
    color: "white",
    textDecoration: "none",
    fontSize: 16,
    lineHeight: 1,
  },

  menuContainer: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    alignItems: "center",
    gap: 34,
    [theme.breakpoints.down("md")]: {
      position: "relative",
      left: "auto",
      transform: "none",
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 8,
  },
  },

  navLink: {
    textDecoration: "none",
  },

  menuItem: {
    color: "#3a2b16 !important",
    textTransform: "none", //MUI Buttons are uppercase by default. This keeps your text as you wrote it (e.g. “About” instead of “ABOUT”).
    letterSpacing: ".10em",
    fontWeight: 700,
    fontSize: 13,
    borderRadius: 14,
    padding: "10px 14px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: 10,
    transition: "background .18s ease, transform .12s ease",
    "&:hover": {
      background: "rgba(255,255,255,.35)",
      transform: "translateY(-1px)",
    },
  },

  // Active indicator dot + slightly stronger contrast
  activeMenuItem: {
    color: "#241a0f !important",
    "&::after": {
      content: '""',
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      bottom: 6,
      width: 6,
      height: 6,
      borderRadius: 999,
      background: "rgba(58,43,22,.7)",
    },
  },

  tabIcon: {
    fontSize: 18,
    opacity: 0.9,
  },
}));

export default function NavigationBar() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Container maxWidth="xl" disableGutters>
        <Toolbar disableGutters className={classes.toolbar}>
          <Box className={classes.brandContainer}>
            <img src="resources/pouch.png" className={classes.icon}/>
            <Typography variant="h6" noWrap component="a" className={classes.brand} href="/">
              POUGKAKI
            </Typography>
          </Box>

          {/* ONLY the 3 tabs */}
          <Box className={classes.menuContainer}>
            {links.map(({ to, label, Icon }) => (
              <NavLink key={to} to={to} className={classes.navLink}>
                {({ isActive }) => (
                  <Button
                    disableRipple
                    className={`${classes.menuItem} ${isActive ? classes.activeMenuItem : ""}`}
                  >
                    <Icon className={classes.tabIcon} />
                    {label}
                  </Button>
                )}
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}