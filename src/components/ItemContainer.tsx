import { Box, Container } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { items } from "../constansts/ImagesText";
import { useParams } from "react-router-dom";

const useStyles = makeStyles(() => ({
  outer: {
    display: "flex",
    justifyContent: "center",
    marginTop: 40,
  },

  imageArea: {
    position: "relative",
    width: 1200,
    height: 600,
    borderRadius: 28,
    overflow: "hidden",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  overlay: {
    position: "absolute",
    inset: 0, //“Stick this element to all four edges of its parent.”
    background: "linear-gradient(rgba(255, 255, 255, 0.49) 0%, rgba(255, 255, 255, 0.37) 55%, rgba(255, 255, 255, 0) 100%)",
  },

  ingredients: {
    position: "absolute",
    right: "2%",
    opacity: 0.8,
    top: "20%",
    display: "flex",
    flexDirection: "column", 
    justifyContent: "flex-start",
    alignItems: "center", 
    backgroundColor: "white",
    width: "30%",
    height: "70%",
    padding: 10,
    borderRadius: 20
  },

  ingrTitle: {
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 8,
    color: "#77067f"
  },

  title: {
    fontSize: 40,
    fontWeight: 700,
    marginBottom: 8,
    color: "#77067f"
  },

  ingredientsList: {
    width: "100%",
    marginTop: 15,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: 20,
    overflowY: "auto",     // scroll if long
  },

  ingredientRow: {
    display: "flex",
    alignItems: "flex-start",
    gridTemplateColumns: "48px 1fr",
    gap: 12,
  },

  ingredientImgWrap: {
    width: 44,
    height: 44,
    borderRadius: 12,
    overflow: "hidden",
    flex: "0 0 auto",
  },

  ingredientImg: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },

  ingredientText: {
    flex: "1 1 auto",
    minWidth: 0,
  },

  ingredientName: {
    fontWeight: 700,
    fontSize: 18,
    marginBottom: 2,
  },

  ingredientDesc: {
    fontSize: 14,
    opacity: 0.85,
  },

  description:  {
    fontSize: 20,
    color: "#585358"
  },

  textCard: {
    width: "50%",
    minWidth: 320,
    padding: 40,
    textAlign: "left", 
  },
}));


export const ItemContainer = () => {
  const classes = useStyles();
  const { itemId } = useParams<{ itemId: string }>();
  const itemTextData = items.find(x => x.id == itemId)!;
  return (
    <Container className={classes.outer}>
      <Box
        className={classes.imageArea}
        style={{ backgroundImage: `url(${itemTextData.imagePath})` }}
      >
        <Box className={classes.overlay} />
          <Box className={classes.ingredients}>
            <Box className={classes.ingrTitle}> Key Ingredients</Box>
            <Box className={classes.ingredientsList}>
              {itemTextData.ingredients?.map((ing, idx) => (
                <Box key={`${ing.name}-${idx}`} className={classes.ingredientRow}>
                  <Box className={classes.ingredientImgWrap}>
                    <img src={ing.image} alt={ing.name} className={classes.ingredientImg} />
                  </Box>

                  <Box className={classes.ingredientText}>
                    <Box className={classes.ingredientName}>{ing.name}</Box>
                    <Box className={classes.ingredientDesc}>{ing.description}</Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
          <Box className={classes.textCard}>
            <Box className={classes.title}>{itemTextData.title}</Box>
            <Box className={classes.description}>{itemTextData.text}</Box>
          </Box>
      </Box>
    </Container>
  );
};
