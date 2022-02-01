import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import {
  Button,
  Container,
  Form,
  Image,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
export default function Header() {
  return (
    <div>
      <Navbar className="bg-navbar" expand="lg">
        <Container fluid className="nav-section"> 
          {/* <Navbar.Brand href="#">Webiwork</Navbar.Brand> */}
          {/* <Image src="/images/logo.jpeg" className="logo" /> */}
          <FontAwesomeIcon className="" icon={faHome} />
          <h5>Property.xtz</h5>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="search-section">
            <Nav className=" my-2 my-lg-0" navbarScroll>
              <NavDropdown title="Research" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="search-relative d-flex">
              <FormControl
                type="search"
                placeholder="Chester, Cheshire, UK"
                className="me-2 bg-search text-white"
                aria-label="Search"
              />
              <FontAwesomeIcon className="search-Icon " icon={faSearch} />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
