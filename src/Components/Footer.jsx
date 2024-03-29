import React from "react";
import { useNavigate } from "react-router-dom";
import '../index.css'

const Footer = () => {
  const navigate = useNavigate();
  
  return (
    <footer className="footer">
      <button onClick={() => navigate(-1)}><img src="../../public/images/BACK.png"alt="back"/></button>
      <div className="powered-by">
        <p>Powered by</p>
        <img src="../../public/images/ico-facebook.png" alt="FB-logo" />
        <img src="../../public/images/ico-instagram.png" alt="FB-logo" />
        <img src="../../public/images/ico-tiktok.png" alt="FB-logo" />
        <img src="../../public/images/ico-whatsapp.png" alt="FB-logo" />
        </div>
      <img src="./images/DH.png" alt="DH-logo" className="logofooter" />
      
    </footer>
  );
};

export default Footer;