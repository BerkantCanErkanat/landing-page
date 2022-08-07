import React from "react";
import { Navbar, Nav, NavbarBrand } from "reactstrap";
import alertify from "alertifyjs";
export function NavigationComponent() {
  return (
    <div>
      <Navbar color="warning" className="my-2">
        <NavbarBrand>Berkant Can Erkanat</NavbarBrand>
        <a href={process.env.PUBLIC_URL + "/pdfs/berkant-can-erkanat-tr.pdf"} target="blank">
        <i className="fas fa-user-alt"></i>
        </a>
        <i
          className="fas fa-envelope-square"
          onClick={() => {
            navigator.clipboard.writeText("berkantcanerkanat44@gmail.com");
            alertify.success("My email address copied to clipboard!", 2);
          }}
        >
        </i>
        <a href="https://github.com/BerkantCanErkanat" target="blank">
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/berkant-can-erkanat-9b2747176/"
          target="blank"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <Nav className="me-auto"></Nav>
      </Navbar>
    </div>
  );
}
