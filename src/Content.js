import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const MediaCard = ({ text, image, link }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea href={link}>
        <CardMedia className={classes.media} image={image} />
        <CardContent style={{ padding: 8 }}>
          <Typography variant="caption" color="textSecondary" component="p">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MediaCard;
