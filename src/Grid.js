import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Content from "./Content";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 480,
    margin: "auto",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h5" color="textPrimary" style={{ margin: 16 }}>
        purnaresa page
      </Typography>
      <Divider style={{ margin: 16 }} />
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="flex-start"
        spacing={1}
        style={{ padding: 6 }}
      >
        <Grid item xs={12}>
          <Content
            text="Medium Blog"
            image="https://miro.medium.com/max/945/1*ckWxE4b3zxi1bgZoJFFxOw.jpeg"
            link="https://medium.com/@purnaresa"
          />
        </Grid>
        <Grid item xs={6}>
          <Content
            text="Linkedin"
            image="https://media-exp1.licdn.com/dms/image/C5622AQE8xifUQm1DDA/feedshare-shrink_800/0/1595822243639?e=1619049600&v=beta&t=9xAXcqG4FqMalrALfEEqc0Tln9xU8Sd_01FYHrwpNtY"
            link="https://www.linkedin.com/in/purnaresa/"
          />
        </Grid>
        <Grid item xs={6}>
          <Content
            text="Github"
            image="https://avatars.githubusercontent.com/u/4938895?s=460&u=db3f553a6964604b5cef820a4e06e3b73c34af5e&v=4"
            link="https://github.com/purnaresa"
          />
        </Grid>
        <Grid item xs={6}>
          <Content
            text="Instagram"
            image="https://scontent-sin6-3.cdninstagram.com/v/t51.2885-19/s320x320/122476335_133065308186613_5393430473602543417_n.jpg?tp=1&_nc_ht=scontent-sin6-3.cdninstagram.com&_nc_cat=109&_nc_ohc=w7DWVC0GRkwAX_qBmZr&ccb=7-4&oh=e169b27ea5f380f10290724d35c2d2db&oe=607FA626"
            link="https://www.instagram.com/purnaresa/"
          />
        </Grid>
        <Grid item xs={6}>
          <Content
            text="Tokopedia Shop"
            image="https://images.tokopedia.net/img/cache/215-square/shops-1/2018/12/24/434430/434430_47f6d9fb-1f46-44ea-81b0-1a2c72c68823.jpg"
            link="https://www.tokopedia.com/founder-and-co"
          />
        </Grid>
      </Grid>
      <Divider style={{ margin: 16 }} />
      <Typography variant="h6" color="textPrimary">
        About me
      </Typography>
      <Typography variant="body1" color="textSecondary" style={{ margin: 16 }}>
        Resa is an online chess game fan. Before Covid, bike to work is his
        thing. He is professionally working in cloud computing and cybersecurity
        space. As most tech-geek-person, he follow Marvel Universe and Lord of
        The Rings lore.
      </Typography>
      <Divider style={{ margin: 16 }} />
      <Typography variant="h6" color="textPrimary" style={{ margin: 16 }}>
        Connect at
      </Typography>
      <Typography variant="body1" color="textSecondary" style={{ margin: 16 }}>
        me@purnaresa.co
      </Typography>
      <div style={{ marginBottom: 48 }}></div>
    </div>
  );
}
