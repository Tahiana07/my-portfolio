import React from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  Box,
  CardHeader,
  IconButton,
  CardContent,
  CardMedia,    // Importer CardMedia pour afficher l'image
  Typography,
  Collapse
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest
  })
}));

const InteractiveCard = ({ card, expanded, onExpandClick }) => {
  return (
    <Card sx={{ maxWidth: 400, width: "100%", mb: 2 }}>
      {/* Affichage de l'image */}
      <CardMedia
        component="img"
        height="194"
        image={card.imageUrl}   // Utiliser l'URL de l'image depuis les données de la carte
        alt={card.title}        // Ajouter une description alternative pour l'image
      />
      <CardHeader
        title={card.title}
        subheader={card.subheader}
      />
      <CardContent>
        <Typography>
          {card.description}
        </Typography>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Typography>
            {card.detailedDescription}
          </Typography>
        </Collapse>
      </CardContent>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: "1rem"
        }}
      >
        {/*<Box>
          <IconButton>
            <FavoriteBorderRounded />
          </IconButton>
          <IconButton>
            <ShareOutlined />
          </IconButton>
        </Box>*/}

        <ExpandMore
          expand={expanded}
          onClick={onExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </Box>
    </Card>
  );
};

export default InteractiveCard;