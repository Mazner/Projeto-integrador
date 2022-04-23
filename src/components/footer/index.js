import React from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export function Footer () {
  return (
    <div style={{backgroundColor:"#747A2A", display:"flex", textAlign:"center"}}>
            <ul style={{listStyleType:"none", width:"30%" }}>
                <h1 style={{}}>Quebra Meu Galho</h1>
                <li>Página Inicial</li>
                <li>Quem Somos?</li>
                <li>Sobre</li>
            </ul>
            <ul style={{listStyleType:"none", width:"30%" }}>
                <h1 style={{}}>Serviços</h1>
                <li>Buscar Serviço</li>
                <li>Anuncie seu serviço</li>
            </ul>
            <ul style={{listStyleType:"none", width:"30%" }}>
                <h1 style={{}}>Social Media</h1>
                <li><InstagramIcon/>Instagram</li>
                <li><FacebookIcon/>Facebook</li>
                <li><WhatsAppIcon/>WhatsApp</li>
            </ul>
    </div>
  );
};