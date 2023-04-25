import { useReducer } from "react";
import { Navbar } from "react-bulma-components";
import { BrowserRouter, Link } from "react-router-dom";

export default function Root(props) {
  const [showMenu, toggle] = useReducer((last) => !last, false);
  const root = props.basenames?.root ?? "/";
  return (
    <BrowserRouter basename={root}>
      <Navbar color="primary" active={showMenu}>
        <Navbar.Brand>
          <Navbar.Item renderAs={Link} to="/">
            Example App
          </Navbar.Item>
          <Navbar.Burger onClick={toggle} />
        </Navbar.Brand>
        <Navbar.Menu onClick={toggle}>
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
