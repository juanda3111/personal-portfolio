import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="/"
              target="_blank"
              id="navbar-brand"
            >
             Juan David R.
            </NavbarBrand>
          
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  href="#resume"
                  onClick={e => {
                    e.preventDefault();
                    document
                      .getElementById("download-section")
                      .scrollIntoView();
                  }}
                >
                  <i class="far fa-file"></i>
                  <p>&nbsp; Curriculum </p>
                </NavLink>
              </NavItem>
              {/*links a mi linkedin*/ }
              <NavItem>
                <NavLink
                  href="https://www.linkedin.com/in/juan-david-romero-guaqueta-85a3b2127/"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fab fa-linkedin"></i>
                  <p className="d-lg-none d-xl-none">linkedIn</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  In case you wonder about my work.
                </UncontrolledTooltip>
              </NavItem>

              {/*mi github*/}
              <NavItem>
                <NavLink
                  href="https://github.com/juanda3111"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-github"></i>
                  <p className="d-lg-none d-xl-none">Github</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  If you want to see my code.
                </UncontrolledTooltip>
              </NavItem>

                {/*mi codepen*/}
                <NavItem>
                <NavLink
                  href="https://codepen.io/juanda3111"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-codepen"></i>
                  <p className="d-lg-none d-xl-none">codepen</p>
                  <UncontrolledTooltip target="#instagram-tooltip">
                  If you want to see my code.
                </UncontrolledTooltip>
                </NavLink>
              
              </NavItem>

              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <i className="fa fa-globe-americas"></i>
                  <p> &nbsp; Languages</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/esp" tag={Link}>
                    Español
                  </DropdownItem>
                  <DropdownItem to="/en" tag={Link}>
                    English
                  </DropdownItem>
                  <DropdownItem
                    href="/de"
                    target="_blank"
                  >
                    Deutsch
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
