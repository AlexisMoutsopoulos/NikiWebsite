import { Box } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { theme } from "../Theme";
import { BowlIcon, PawIcon, PlantIcon, PouchIcon } from "../../icons";

const useStyles = makeStyles(() => ({
    imageArea: {
        width: "100%",
        height: 600,
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        flexDirection: "column",
        overflow: "hidden",
        backgroundSize: "cover",
        backgroundPosition: "center",
        [theme.breakpoints.down("md")]: {
            height: 500,
        }
  },

    title: {
        fontSize: 50,
        [theme.breakpoints.down("md")]: {
            fontSize: 30,
        }
    },

    description: {
        width: "65%",
        fontSize: 20,
        textAlign: "center",
        letterSpacing: 0.2,
        lineHeight: 3,
        color: "#463920df",
        [theme.breakpoints.down("md")]: {
            lineHeight: 2,
            fontSize: 15,
        }
    },

    aboutText: {
        display: "flex",
        padding: 20,
        width: "50%",
        height: 400,
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        WebkitMaskImage: "radial-gradient(closest-side, rgba(0,0,0,1) 82%, rgba(0,0,0,0) 100%)",
        borderRadius: 200,
        backgroundColor: "rgba(222, 211, 193, 0.9)", // ✅ instead of opacity
        backdropFilter: "blur(1px)",
        [theme.breakpoints.down("md")]: {
            width: "100%",
            height: 300,
            backgroundColor: "rgba(222, 211, 193, 0.65)"
        }
    },

    slideInRight: {
        opacity: 0,
        animation: "$slideInRight 900ms ease-out forwards",
        display: "flex",     
        alignItems: "center",
        gap: 16, 
        alignSelf: "flex-end"
    },

    "@keyframes slideInRight": {
        from: {
            transform: "translateX(60px)", // ✅ start from right
            opacity: 0,
        },
        to: {
            transform: "translateX(0)",    // ✅ end in place
            opacity: 1,
        },
    },

    aboutRemarks: {
        display: "flex",
        right: 40,
        transform: "translateY(-50%)",
        width: 400,
        marginTop: 100,
        padding: "18px 22px",
        textAlign: "center",
        alignSelf: "flex-end",
        borderRadius: 6,
        [theme.breakpoints.down("md")]: {
            right: 0, 
        }
    },

    aboutRemarksText: {
        fontSize: 20,
        height: 100,
        color: "#463920df",
        backgroundColor: "rgba(235, 230, 221, 0.75)", 
        backdropFilter: "blur(1px)",
        [theme.breakpoints.down("md")]: {
            fontSize: 18,
            height: 80,
        }
    },

    valuesTitle: {
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        display: "flex",
        paddingTop: 50,
        fontSize: 40,
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

    img: {
        width: 100,
        height: 200,
        objectFit: "contain",
        flexShrink: 0,
    },

    labels: {
        display: "flex",
        justifyContent: "center",
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
        fontSize: 30,
        letterSpacing: 1,
        width: "80%",
        textAlign: "center",
        [theme.breakpoints.down("md")]: {
            fontSize: 20,
        }
    },

    storyBox: {
        display: "flex",
        padding: 60,
        gap: 40,
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            padding: 30,
            alignItems: "center"
        },
    },

    storyText: {
        fontSize: 30,
        width: "60%",
        letterSpacing: 1,
        lineHeight: 2,
        [theme.breakpoints.down("md")]: {
            width: "100%",
            fontSize: 20,
        },
    },

    storyImg: {
        height: 800,
        width: 800,
        [theme.breakpoints.down("md")]: {
            height: 350,
            width: 350,
        },
    }
}
))

export const AboutPage = () => {
    const classes = useStyles();
    return(
    <>
        <Box className={classes.imageArea} style={{ backgroundImage: `url('resources/aboutImage.png')` }}>
            <Box className={classes.aboutText}>
                <h1 className={classes.title}>About us</h1>
                <div className={classes.description}>
                    At POUGKAGKI, we are dedicated to creating natural, handmade skincare products with the finest ingredients 
                    for the care of your well being.
                </div>
            </Box>
            <Box className={classes.aboutRemarks}>
                <Box className={classes.slideInRight}>
                    <img src="resources/pouchImg.png" alt="Pouch image" className={classes.img} />
                    <div className={classes.aboutRemarksText}>
                        Beautiful, hand-filled pouches of creams, soaps, scrubs and more.
                    </div>
                </Box>
            </Box>
        
        </Box>
        <h1 className={classes.valuesTitle}>Our Values</h1>
        <Box className={classes.labels}>
            <div className={classes.iconContainer}>
                <BowlIcon />
                <div className={classes.labelText}>Small Batch Crafted</div>
            </div>
            <div className={classes.iconContainer}>
                <PlantIcon />
                <div className={classes.labelText}>Natural Ingredients</div>
            </div>
            <div className={classes.iconContainer}>
                <PawIcon />
                <div className={classes.labelText}>Cruelty-Free</div>
            </div>
        </Box>
        <h1 className={classes.valuesTitle}>Our Story</h1>
        <Box className={classes.storyBox}>
            <img src="resources/storyImg.png" alt="Story image" className={classes.storyImg}/>
            <div className={classes.storyText}>
                At POUGKAGKI, our story begins with a simple idea: skincare should feel honest, comforting, 
                and made with care. Every cream, soap, and scrub is created in small batches using thoughtfully 
                chosen ingredients and a gentle, hands-on process. We focus on textures that melt into the skin, 
                clean scents inspired by nature, and formulas that fit into everyday rituals.
            </div>
        </Box>
    </>)
}