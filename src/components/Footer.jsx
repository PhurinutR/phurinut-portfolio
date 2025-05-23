import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/PhurinutR" target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/phurinut/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>
      <p>
        This portfolio created by{" "}
        <a
          href="https://github.com/PhurinutR/phurinut-portfolio"
          target="_blank"
          rel="noreferrer"
        >
          Phurinut Rungrojkitiyos
        </a>{" "}
        powered by 🍕
      </p>
    </footer>
  );
}

export default Footer;
