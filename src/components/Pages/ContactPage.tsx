import { Box, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles"
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MdPhone from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { theme } from "../Theme";

const useStyles = makeStyles(() => ({
    page: {
        padding: 30,
        [theme.breakpoints.down("md")]: {
            padding: 10
        }
    },

    title: {
        fontSize: 50
    },

    description: {
        paddingTop: 20,
        fontSize: 20
    },

    boxes: {
        paddingTop: 40,
        display: "flex",
        justifyContent: "space-between",
        [theme.breakpoints.down("md")]: {
            flexDirection: "column"
        }
    },

    box: {
        background: "linear-gradient(90deg, #e7d0a25e 0%, #ede1c7 45%, #efe3cc 100%)",
        width: "40%",
        height: 400,
        borderRadius: 20,
        border: "1px solid rgba(80, 60, 35, 0.2)",
        padding: 20,
        zIndex: 1,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)",
        [theme.breakpoints.down("md")]: {
            width: "100%"
        }
    },

    item: {
        display: "flex",
        gap: 14,
        alignItems: "flex-start",
        padding: "12px 10px",
    },

    iconBox: {
        width: 30,
        height: 30,
        display: "grid",
        placeItems: "center",
        flex: "0 0 auto",
    },

    itemTitle: {
        fontSize: 25,
        fontWeight: 700,
        color: "#3b2b1b",
        lineHeight: 1.1,
        [theme.breakpoints.down("md")]: {
            fontSize: 18,
        }
        
    },

    itemSub: {
        marginTop: 6,
        fontSize: 20,
        color: "rgba(59, 43, 27, 0.70)",
        [theme.breakpoints.down("md")]: {
            fontSize: 15,
        }
    },

    divider: {
        height: 1,
        background: "rgba(80, 60, 35, 0.18)",
        margin: "6px 0",
    },

    mapTop: {
        height: 300
    },

    mapIframe: {
        width: "100%",
        height: "100%",
        border: 0
    },

    mapBottom: {
        height: 100,   
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderTop: "1px solid rgba(80, 60, 35, 0.12)",
    },

    mapLeft: {
        display: "flex",
        alignItems: "center",
        gap: 12,
    },

    pinIcon: {
        width: 34,
        height: 34,
        borderRadius: 12,
        display: "grid",
        placeItems: "center",
        background: "rgba(120, 160, 120, 0.18)", // subtle green-ish pin bg like the screenshot
        border: "1px solid rgba(80, 120, 80, 0.20)",
    },

    mapTitle: {
        fontSize: 16,
        fontWeight: 800,
        color: "#3b2b1b",
        lineHeight: 1.1,
    },

    mapSub: {
        marginTop: 4,
        fontSize: 13,
        color: "rgba(59, 43, 27, 0.70)",
        [theme.breakpoints.down("md")]: {
            fontSize: 10,
        }
        
    },

}))

export const ContactPage = () => {
    const classes = useStyles();
    return (
        <Box className={classes.page} >
            <h1 className={classes.title}>Contact</h1>
            <Typography className={classes.description}>Reach out via email, Instagram, or find us on the map.</Typography>
            <div className={classes.boxes}>
                <Box className={classes.box}>
                    <div className={classes.item}>
                        <MailOutlineIcon className={classes.iconBox} />
                            <div>
                                <div className={classes.itemTitle}>Email us</div>
                                <div className={classes.itemSub}>hello@pougkaki.com</div>
                            </div>
                        </div>

                    <div className={classes.divider} />

                    <div className={classes.item}>
                        <InstagramIcon className={classes.iconBox} />
                        <div>
                            <div className={classes.itemTitle}>instagram.com/yourhandle</div>
                            <div className={classes.itemSub}>Visit us on Instagram</div>
                        </div>
                    </div>

                    <div className={classes.divider} />

                    <div className={classes.item}>
                        <MdPhone className={classes.iconBox}/>
                        <div>
                            <div className={classes.itemTitle}>Call us</div>
                            <div className={classes.itemSub}>2108060395</div>
                        </div>
                    </div>

                    <div className={classes.divider} />
                </Box>
                <Box className={classes.box}>
                    <div className={classes.mapTop}>
                        <iframe
                        className={classes.mapIframe}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3141.657258126165!2d23.803263899999997!3d38.0550718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1997b1c129ac5%3A0xc0907369e406e36c!2zzpvOkc6TzpnOn86jIM6Rzp3OlM6hzpXOkc6j!5e0!3m2!1sel!2sgr!4v1770472932487!5m2!1sel!2sgr"
                        />
                    </div>

                    <div className={classes.mapBottom}>
                        <div className={classes.mapLeft}>
                            <div className={classes.pinIcon}>
                                <PlaceOutlinedIcon fontSize="small" />
                            </div>

                            <div>
                                <div className={classes.mapTitle}>Pharmacy Lagios Andreas</div>
                                <div className={classes.mapSub}>Pharmacy Lagios Andreas, Thiseos 4, Marousi 151 24</div>
                            </div>
                        </div>
                    </div>
                </Box>
            </div>
        </Box>
    )
}