import React from "react";
import { Header, Footer, Perfil } from "../../components";
import {Container, Typography, Grid, CardActionArea, Card, CardMedia, CardContent} from "@mui/material";
export function Sobre () {
  return(
    <>
    <div style={{margin:"100px"}}>
      <Header/>
      <Grid direction="row" justifyContent="flex-start" alignItems="stretch" container spacing={1} columns={2}>
        <Grid item xs={8}>
          <div style={{width:"80%", height:"400%", position:"relative", float:"left"}}>
          </div>
        </Grid>
        <Grid item xs={10}>
          <Container fixed>
            <div style={{ textAlign: "left", width:"50%", position:"relative", float:"right"}}>
            </div>   
          </Container>

          <div style={{width:"80%", height:"400%", position:"relative", float:"right"}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Guilherme Fernandes
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>

    <div style={{width:"80%", height:"400%", position:"relative", float:"right"}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Iago Sasaki
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>


    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Marcos Bezner
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
 
 

        </Grid>
      </Grid>    
    </div>
    <Footer/>
    </>
  );
};
