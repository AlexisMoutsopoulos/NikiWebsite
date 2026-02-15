import makeStyles from "@mui/styles/makeStyles"
import { SetTextData } from "../types/Types"
import { Box, Container } from "@mui/material"
import { PhotoCarouselMui } from "./PhotoCarouselMui"
import { items, sets } from "../constansts/ImagesText"
import { Link } from "react-router-dom"
import { theme } from "./Theme"

const useStyles = makeStyles(() => ({
  outer: {
    display: "flex",
    justifyContent: "center",
    marginTop: 40,
    position: "relative",
    width: 1200,
    height: 600,
    borderRadius: 28,
    background: "#FBF7F1",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
    border: "1px solid #E7D8C6 ",
    padding: 20,
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "100%",
      flexDirection: "column",
      padding: 12,
      borderRadius: 18,
    },
  },

  carouselWrap: {
    width: "40%",
    height: "90%",
    left: 0,
    position: "absolute",
    margin: 20,

    [theme.breakpoints.down("md")]: {
      width: "auto",
      height: 700,
      borderRadius: 14,
      overflow: "hidden",
      position: "relative"
    },
  },

  textArea: {
    backgroundColor: "white",
    position: "absolute",
    width: "60%",
    right: 0,
    margin: 20,
    padding: 18,
    height: "90%",
    borderRadius: 18,

    [theme.breakpoints.down("md")]: {
      position: "relative",
      width: "100%",
      height: "100%",
      top: 0,
      padding: 5,
      margin: 0,
      borderRadius: 14,
    },
  },

  title: {
    fontSize: 50,
    padding: 10,
    fontWeight: 400,

    [theme.breakpoints.down("md")]: {
      fontSize: 28,
      padding: 6,
    },
  },

  description: {
    fontSize: 20,
    color: "#585358",
    padding: 10,

    [theme.breakpoints.down("md")]: {
      fontSize: 16,
      padding: 6,
    },
  },

  itemTitle: {
    fontSize: 40,
    color: "#000000",
    padding: 10,

    [theme.breakpoints.down("md")]: {
      fontSize: 20,
      padding: 6,
      marginTop: 6,
    },
  },

  item: {
    paddingLeft: 20,
    margin: 20,
    fontSize: 20,

    [theme.breakpoints.down("md")]: {
      margin: 10,
      fontSize: 16,
    },
  },
}));
interface SetContainerProps{
    setTextData : SetTextData
}

export const SetContainer = ({ setTextData } : SetContainerProps) =>  {
const classes = useStyles();

  return (
    <Container className={classes.outer}>
      <Box className={classes.carouselWrap}>
        <PhotoCarouselMui images={[items[0].imagePath, sets[0].imagePath, items[1].imagePath]} />
      </Box>
        <Box className={classes.textArea}>
          <Box className={classes.title}>{setTextData.name}</Box>
          <Box className={classes.description}>{setTextData.description}</Box>
          <Box className={classes.itemTitle}>Set Contains:</Box>
          <ul className={classes.item}>
            {setTextData.itemTextData.map((item) => {
              return (
                <li><Link to={`/${item.id}`}>{item.title}</Link></li>
              );
            })}
            
          </ul>
        </Box>
    </Container>
  );
}