
import makeStyles from "@mui/styles/makeStyles";
import { theme } from "../Theme";
import { Box } from "@mui/material";
import { HandIcon, PlantIcon } from "../../icons"
import { PouchIcon } from "../../icons"
import { SkinIcon } from "../../icons"

const useStyles = makeStyles(() => ({
    title1: {
        fontSize: 70,
        letterSpacing: 2,
        [theme.breakpoints.down("md")]: {
            fontSize: 30,
        }
    },

    title2: {
        fontSize: 30,
        [theme.breakpoints.down("md")]: {
            fontSize: 20,
        }
    },

    title3: {
        fontSize: 20,
        fontStyle: "italic",
        [theme.breakpoints.down("md")]: {
            fontSize: 15,
        }
    },

    titles: {
        display: "flex",
        padding: 20,
        width: "50%",
        flexDirection: "column",
        textAlign: "center",
        WebkitMaskImage: "radial-gradient(closest-side, rgba(0,0,0,1) 82%, rgba(0,0,0,0) 100%)",
        borderRadius: 300,
        backgroundColor: "rgba(222, 205, 180, 0.8)", // ✅ instead of opacity
        backdropFilter: "blur(1px)",
        [theme.breakpoints.down("md")]: {
            width: "100%",
        }
    },

    imageArea: {
        width: "100%",
        height: 600,
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",
        backgroundSize: "cover",
        backgroundPosition: "center",
        [theme.breakpoints.down("md")]: {
            height: 400,
        }
  },

    labels: {
        display: "flex",
        justifyContent: "center",
        background: "#ede7e0",
        gap: 32,
        padding: 20,
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            padding: 10,
        }
        

    },

    iconContainer: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
        paddingRight: 20,
        "&:not(:last-child)": {
            borderRight: "1px solid rgba(191, 145, 29, 0.51)",
        },
        [theme.breakpoints.down("md")]: {
            borderBottom: "1px solid rgba(191, 145, 29, 0.51)",
            "&:not(:last-child)": {
                borderRight: 0,
            },
        }
    },

    labelText: {
        fontSize: 20,
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
            paddingTop: 0,
            fontSize: 20,
        }
    },

    featureCat: {
        justifyContent: "center",
        display: "flex",
        gap: 20,
        [theme.breakpoints.down("md")]: {
            gap: 10,
        }
    },

    boxes: {
        width: "30%",
        height: 400,
        textAlign: "center",
        [theme.breakpoints.down("md")]: {
            height: 200
        }
    },

    boxText: {
        fontSize: 30,
        paddingBottom: 20,
        [theme.breakpoints.down("md")]: {
            paddingBottom: 0,
            fontSize: 20,
        }
        
    },

    img: {
        width: 400,
        height: 400,
        objectFit: "cover",
        [theme.breakpoints.down("md")]: {
            width: 120,
            height: 120,
        }
    }
}
))

export const HomePage = () => {
    const classes = useStyles();

    return (
        <>
            <Box
            className={classes.imageArea}
            style={{ backgroundImage: `url('resources/homeImage.png')` }}
        >
                <div className={classes.titles}>
                    <h2 className={classes.title2}>Welcome to</h2>
                    <h1 className={classes.title1}>POUGKAKI</h1>
                    <h2 className={classes.title2}>Your Local Beauty Boutique</h2>
                    <div className={classes.title3}>Visit our pharmacy to see our exclusive cosmetics.</div>
                </div>
            </Box>
            <Box className={classes.labels}>
                <div className={classes.iconContainer}>
                    <HandIcon />
                    <div className={classes.labelText}>Handmade Products</div>
                </div>
                <div className={classes.iconContainer}>
                    <PlantIcon />
                    <div className={classes.labelText}>Natural Ingredients</div>
                </div>
                <div className={classes.iconContainer}>
                    <PouchIcon />
                    <div className={classes.labelText}>Pouch Bag Handcrafted</div>
                </div>
                <div className={classes.iconContainer}>
                    <SkinIcon />
                    <div className={classes.labelText}>Skin Care</div>
                </div>
            </Box>
            <h2 className={classes.featureCatTitle}>Featured Categories</h2>
            <Box className={classes.featureCat}>
                <Box className={classes.boxes}>
                    <img src="resources/airplane.png" alt="Travel Package" className={classes.img} />
                    <div className={classes.boxText}>Travel Package</div>
                </Box>
                <Box className={classes.boxes}>
                    <img src="resources/bodyRoutine.png" alt="Body Routine" className={classes.img} />
                    <div className={classes.boxText}>Body Routine</div>
                </Box>
                <Box className={classes.boxes}>
                    <img src="resources/bodyCare.png" alt="Body care" className={classes.img}/>
                    <div className={classes.boxText}>Hand & Body Care</div>
                </Box>
            </Box>
            <h2 className={classes.featureCatTitle}>Fragance</h2>
            <Box className={classes.featureCat}>
                <Box className={classes.boxes}>
                    <img src="resources/peach.png" alt="Travel Package" className={classes.img} />
                    <div className={classes.boxText}>Peach</div>
                </Box>
                <Box className={classes.boxes}>
                    <img src="resources/whiteFlowers.png" alt="Body Routine" className={classes.img} />
                    <div className={classes.boxText}>White Flowers</div>
                </Box>
                <Box className={classes.boxes}>
                    <img src="resources/greenTea.png" alt="Body care" className={classes.img}/>
                    <div className={classes.boxText}>Green Tea</div>
                </Box>
            </Box>
        </>
    )
}
