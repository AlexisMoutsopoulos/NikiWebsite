import makeStyles from "@mui/styles/makeStyles"
import { SetTextData } from "../types/Types"
import { Box, Container } from "@mui/material"
import { PhotoCarouselMui } from "./PhotoCarouselMui"
import { items, sets } from "../constansts/ImagesText"
import { Link } from "react-router-dom"

const useStyles = makeStyles(() => ({
    outer: {
        display: "flex",
        justifyContent: "center",
        marginTop: 40,
        position: "relative",
        width: 1200,
        height: 600,
        borderRadius: 28,
        backgroundColor: "linear-gradient(90deg, #e7d0a25e 0%, #ede1c7 45%, #efe3cc 100%)",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)",
        border: "1px solid rgba(80, 60, 35, 0.2)",
        opacity: 0.5
    },

    textArea: {
        backgroundColor: "white",
        position: "absolute",
        width: "60%",
        right: 0,
        margin: 20,
        padding: 10,
        height: "90%"
    },

    title: {
        fontSize: 50,
        padding:10,
        fontWeight: 400
    },

    description:  {
        fontSize: 20,
        color: "#585358",
        padding: 10
  },

    itemTitle: {
        fontSize: 40,
        color: "#000000",
        padding: 10,
    },

    item: {
        paddingLeft: 20, 
        margin: 20,
        fontSize: 20,
    }

    

}))
interface SetContainerProps{
    setTextData : SetTextData
}

export const SetContainer = ({ setTextData } : SetContainerProps) =>  {
const classes = useStyles();

  return (
    <Container className={classes.outer}>
    <PhotoCarouselMui images={[items[0].imagePath, sets[0].imagePath]}/>
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