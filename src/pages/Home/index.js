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
                    <iframe title="map" class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3643.1649489867455!2d-52.38915795000186!3d-24.060495186021026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ed756613064859%3A0xc12ba615c30491ed!2sUTFPR%20Universidade%20Tecnol%C3%B3gica%20Federal%20Do%20Paran%C3%A1!5e0!3m2!1spt-BR!2sbr!4v1649035605632!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy"></iframe>

              </Typography>
          </div>
        </Grid>
        <Grid item xs={10}>
          <Container fixed>
            <div style={{ textAlign: "left", width:"50%", position:"relative", float:"right"}}>
              <Typography
                variant="h2"
                  sx={{ fontSize: "20px", position:"relative" }}>
                    Bem vindo ao Quebra meu Galho! Neste site, nós iremos auxiliá-lo a buscar serviços de seu interesse próximos à sua área;<br></br>
                    Também iremos ajudá-lo a promover seus serviços na sua região!<br></br> Venha fazer parte desta árvore de oportunidades, entre para a nossa família!<br></br>
                    Utilize o botão abaixo para buscar algum serviço de sua escolha!       
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
