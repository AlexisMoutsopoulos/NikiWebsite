import makeStyles from "@mui/styles/makeStyles"
import { SetTextData } from "../types/Types"
import { Box, Button, Container, Tooltip } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"
import { theme } from "./Theme"
import { PeachIcon, TeaIcon, WhiteFlowersIcon } from "../icons"
import { JSX } from "react"

const fragranceIcons = new Map<string, JSX.Element>([
  ["green tea", <TeaIcon />],
  ["white flowers", <WhiteFlowersIcon />],
  ["peach", <PeachIcon />],
]);

const useStyles = makeStyles(() => ({
  outer: {
    display: "flex",
    position: "relative",
    width: "100%",
    flexDirection: "column",
    height: 1100,
    marginBottom: 20,
    marginTop: 5,
    background: "#FBF7F1",
    border: "1px solid #E7D8C6 ",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "auto",
      alignItems: "center"
    },
  },

  boxImage: {
    width: "100%",
    height: 800,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  featureCatTitle: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    display: "flex",
    paddingTop: 50,
    fontSize: 30,
    "&::before, &::after": {
      content: '""',
      height: 0.5,
      flex: "0 1 400px",
      backgroundColor: "rgba(0,0,0,0.25)",
    },
    [theme.breakpoints.down("md")]: {
      gap: 10,
      paddingTop: 10,
      fontSize: 20,
    }
  },

  textArea: {
    width: "100%",
    padding: 18,
    [theme.breakpoints.down("md")]: {
      width: "100%",
      textAlign: "center",
      padding: 15,
    },
  },

  setDescription: {
    fontSize: 20,
    width: "50%",
    lineHeight: 2,
    color: "#585358",
    padding: 10,
    [theme.breakpoints.down("md")]: {
      fontSize: 16,
      width: "100%",
      textAlign: "center",
      padding: 6,
    },
  },

  setTitle: {
    fontSize: 40,
    color: "#000000",
    padding: 10,

    [theme.breakpoints.down("md")]: {
      fontSize: 20,
      padding: 6,
    },
  },

  items: {
    display: "flex",
    justifyContent: "center",
    gap: 20,
    [theme.breakpoints.down("md")]: {
      flexDirection: "column"
    },
    
  },

  itemTitle: {
    fontSize: 20,
    color: "#000000",
    paddingTop: 10,

    [theme.breakpoints.down("md")]: {
      fontSize: 20,
      padding: 6,
    },
  },

  itemText: {
    fontSize: 15,
    color: "#6a6262",
    padding: 10,
    textAlign: "left",

    [theme.breakpoints.down("md")]: {
      fontSize: 15,
      padding: 6,
      marginTop: 6,
    },
  },

  item: {
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    flexDirection: "column",
    margin: 20,
    width: 300,
    height: 350,
    fontSize: 20,
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
    border: "1px solid rgba(80, 60, 35, 0.2)",
    borderRadius: 28,
    background: "#e8d7b5",
    [theme.breakpoints.down("md")]: {
      margin: 10,
    },
  },

  itemImgWrap: {
    width: "100%",
    height: "40%",     
    overflow: "hidden",
    background: "#fff",
  },

  itemImg: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    display: "block",
  },

  fragancesList: {
    display: "flex",
    gap: 5,
    padding: 10
  },

  fragance: {
    borderRadius: 20,
    background: "#dcb9e6",
    fontSize: 15,
    padding: 5
  },

  button: {
    width: "60%",
    background: "#ca68e5",
    color: "#cec8d0",
    borderRadius: 20,
  }
}));

interface SetContainerProps{
    setTextData : SetTextData[]
}

export const SetContainer = ({ setTextData } : SetContainerProps) =>  {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
      <>
        {setTextData.map((set, idx) => (
          <Box className={classes.outer}>
            <Box className={classes.boxImage} style={{ backgroundImage: `url('resources/aboutImage.png')` }}>
              <Box className={classes.textArea}>
                <h1 className={classes.setTitle}>{set.name}</h1>
                <div className={classes.setDescription}>{set.description}</div>
              </Box>
            </Box>
            <h2 className={classes.featureCatTitle}>Featured Products</h2>
            <Box className={classes.items}>
              {set.itemTextData.map((item) => (
                  <Box className={classes.item}>
                    <Box className={classes.itemImgWrap}>
                      <img className={classes.itemImg} src={item.imagePath} alt={item.title} />
                    </Box>
                    <div className={classes.itemTitle}>{item.title}</div>
                    <div className={classes.itemText}>{item.text}</div>
                    <Box className={classes.fragancesList}>
                      {item.fragances.map((fr) => (
                        <Tooltip key={fr} title={`Fragrance: ${fr}`} 
                          arrow 
                          enterTouchDelay={0}      // show immediately on tap
                          leaveTouchDelay={2000}   // hide after 2s
                          >
                          <span>{fragranceIcons.get(fr) ?? null}</span>
                        </Tooltip>
                      ))}
                    </Box>
                    <Button className={classes.button} onClick={() => navigate(`/${item.id}`)}>View Details</Button>
                  </Box>
                
              ))}
            </Box>
          </Box>
        ))}
      </>
    );
};