import { Box } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { theme } from "../Theme";

const useStyles = makeStyles(() => ({
    outer: {
        padding: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },

    title: {
        fontSize: 50,
    },

    description: {
        paddingTop: 20,
        fontSize: 20,
        width: "80%",
        letterSpacing: 0.2,
        lineHeight: 2,
        color: "#463920df",
    },

    img: {
        width: "90%",
        height: 800,
        objectFit: "cover",
        WebkitMaskImage: "radial-gradient(closest-side, rgba(0,0,0,1) 82%, rgba(0,0,0,0) 100%)",
        maskImage: "radial-gradient(closest-side, rgba(0,0,0,1) 82%, rgba(0,0,0,0) 100%)",
        [theme.breakpoints.down("md")]: {
            WebkitMaskImage: "radial-gradient(closest-side, rgba(0,0,0,1) 76%, rgba(0,0,0,0) 100%)",
            maskImage: "radial-gradient(closest-side, rgba(0,0,0,1) 76%, rgba(0,0,0,0) 100%)",
            height: 320
        }
    }
}
))

export const AboutPage = () => {
    const classes = useStyles();
    return(
    <Box className={classes.outer}>
    <h1 className={classes.title}>About us</h1>
    <div className={classes.description}>
        Born from a love of simple self-care, our brand focuses on handmade skincare that’s honest and effective. 
        We blend trusted ingredients into creams, lotions, scrubs, and soap bars that feel good on your skin and fit beautifully into your daily routine.
        Our company is dedicated to providing natural, handcrafted skincare products, including creams, soap bars, body lotions, and scrubs, all made 
        with care and the finest ingredients. We create natural, handcrafted skincare made to feel gentle, effective, and luxurious. From nourishing creams 
        and body lotions to soap bars and scrubs, every product is carefully formulated with quality ingredients and made in small batches. Simple routines, 
        beautiful results—crafted with care.
    </div>
    <img className={classes.img} src="resources/aboutImage.png"></img>
    
    </Box>)
}