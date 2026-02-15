import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";

// Brand + tab icons (feel free to swap these)
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { theme } from "./Theme";
import { Menu, MenuItem, useMediaQuery } from "@mui/material";
import React from "react";

const links = [
  { label: "Home", to: "/home", Icon: HomeOutlinedIcon },
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
      gap: 12,
      padding: "14px 12px",
      justifyContent: "space-between",
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
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleOpen = (e: React.MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (isMobile) ? (
  <AppBar position="static" className={classes.appBar}>
      <Container maxWidth="xl" disableGutters>
        <Toolbar disableGutters className={classes.toolbar}>
          <Box className={classes.brandContainer}>
            <img src="resources/pouch.png" className={classes.icon}/>
            <div className={classes.brand}>
              POUGKAKI
            </div>
          </Box>
          <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleOpen}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            {links.map(({ to, label, Icon }: any) => (
              <MenuItem key={to} onClick={handleClose} disableGutters>
                <NavLink to={to} className={classes.navLink}>
                  {({ isActive }) => (
                    <Button
                      fullWidth
                      disableRipple
                      className={`${classes.menuItem} ${isActive ? classes.activeMenuItem : ""}`}
                      startIcon={<Icon className={classes.tabIcon} />}
                    >
                      {label}
                    </Button>
                  )}
                </NavLink>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>)
    : 
    (<AppBar position="static" className={classes.appBar}>
      <Container maxWidth="xl" disableGutters>
        <Toolbar disableGutters className={classes.toolbar}>
          <Box className={classes.brandContainer}>
            <img src="resources/pouch.png" className={classes.icon}/>
            <div className={classes.brand}>
              POUGKAKI
            </div>
          </Box>
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