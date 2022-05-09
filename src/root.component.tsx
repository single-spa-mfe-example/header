import { Navbar } from "react-bulma-components";
import { BrowserRouter, Link } from "react-router-dom";

export default function Root(props) {
  return (
    <BrowserRouter>
      <Navbar color="black">
        <Navbar.Brand>
          <Navbar.Item renderAs={Link} to="">
            Example App
          </Navbar.Item>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Container>
            <Navbar.Link arrowless renderAs={Link} to="/">
              Home
            </Navbar.Link>
            <Navbar.Link arrowless renderAs={Link} to="/search">
              Search
            </Navbar.Link>
          </Navbar.Container>
          <Navbar.Container align="right">
            <Navbar.Link arrowless renderAs={Link} to="/settings">
              Settings
            </Navbar.Link>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    </BrowserRouter>
  );
}
