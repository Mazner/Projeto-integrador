import React from "react";
import { Header, Footer } from "../../components";
import {Button, Container, Typography, Grid} from "@mui/material";

export function Home () {
  return (
    <>
    <div style={{margin:"100px"}}>
      <Header/>
      <Grid direction="row" justifyContent="flex-start" alignItems="stretch" container spacing={1} columns={2}>
        <Grid item xs={8}>
          <div style={{width:"80%", height:"400%", position:"relative", float:"left"}}>
              <Typography
                variant="h1"
                  sx={{ fontSize: "48px", textAlign:"right", width:"50%", height:"110px"}}>
                    "Quebra Meu Galho"
              </Typography>
          </div>
        </Grid>
        <Grid item xs={10}>
          <Container fixed>
            <div style={{ textAlign: "left", width:"50%", position:"relative", float:"right"}}>
              <Typography
                variant="h2"
                  sx={{ fontSize: "20px", position:"relative" }}>
                    Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.        
              </Typography>
              <div style={{ textAlign: "center"}}>
                <Button size ="large" color="success" variant="contained">"Buscar Serviço"</Button>
              </div> 
            </div>   
          </Container>
        </Grid>
      </Grid>    
    </div>
    <Footer/>
    </>
  );
};
