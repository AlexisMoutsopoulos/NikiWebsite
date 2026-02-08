import * as React from "react";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  outer: {
    position: "absolute",
    left: 0,
    width: "360px",
    maxWidth: "100%",
    height: "80%",
    padding: 10,
    margin: 20,
    borderRadius: "24px"
  },

  card: {
    position: "relative",
    height: "100%",
    borderRadius: "24px",
    overflow: "hidden",
    background: "#f6e9f4",
  },

  mainImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  // arrows
  arrow: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "rgba(255, 255, 255, 0.9) !important",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.12)",
    "&:hover": {
      background: "rgba(255, 255, 255, 1) !important",
    },
  },

  arrowLeft: {
    left: "14px",
  },

  arrowRight: {
    right: "14px",
  },

  // thumbnails
  thumbs: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: "14px",
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    padding: "0 16px",
  },

  thumbBtn: {
    width: "72px",
    height: "52px",
    borderRadius: "14px",
    overflow: "hidden",
    cursor: "pointer",
    padding: 0,
    border: "2px solid transparent",
    background: "rgba(255, 255, 255, 0.65)",
    boxShadow: "0 10px 18px rgba(0, 0, 0, 0.1)",
    transition: "transform 150ms ease, box-shadow 150ms ease, border 150ms ease",
  },

  thumbBtnActive: {
    borderColor: "rgba(255, 255, 255, 0.95)",
    boxShadow: "0 12px 22px rgba(0, 0, 0, 0.18)",
    transform: "translateY(-2px)",
  },

  thumbImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
}));

interface PhotoCarouselMuiProps {
  images: string[];
  altPrefix?: string;
}

export const PhotoCarouselMui = ({ images, altPrefix = "Image" }: PhotoCarouselMuiProps) => {
  const classes = useStyles();
  const [active, setActive] = React.useState(0);

  const goPrev = () => setActive((p) => (p - 1 + images.length) % images.length);
  const goNext = () => setActive((p) => (p + 1) % images.length);

  if (!images?.length) return null;

  return (
    <div className={classes.outer}>
      <Paper elevation={0} className={classes.card}>
        <img className={classes.mainImg} src={images[active]} alt={`${altPrefix} ${active + 1}`} />

        <IconButton
          className={`${classes.arrow} ${classes.arrowLeft}`}
          onClick={goPrev}
          aria-label="previous"
        >
          <KeyboardArrowLeft />
        </IconButton>

        <IconButton
          className={`${classes.arrow} ${classes.arrowRight}`}
          onClick={goNext}
          aria-label="next"
        >
          <KeyboardArrowRight />
        </IconButton>

        <div className={classes.thumbs}>
          {images.map((img, idx) => (
            <button
              key={`${img}-${idx}`}
              type="button"
              className={`${classes.thumbBtn} ${idx === active ? classes.thumbBtnActive : ""}`}
              onClick={() => setActive(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            >
              <img className={classes.thumbImg} src={img} alt={`${altPrefix} thumbnail ${idx + 1}`} />
            </button>
          ))}
        </div>
      </Paper>
    </div>
  );
};