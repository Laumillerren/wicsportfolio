import React from "react";
import Container from "react-bootstrap/Container";

const Footer = () => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center">
      <Container>
        <p>This portfolio website was made from open source code.</p>
      </Container>
    </footer>
  );
};

export default Footer;
