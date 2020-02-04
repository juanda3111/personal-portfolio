import React from "react";
//react components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

function Proyectos(){
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  return (
    <div className="container">
      <div className="row">
        <br />
        <div className="col-sm-12 text-center">
        <h2>Take a look of some of my previous works</h2>
        </div>


        <Col className="ml-auto mr-auto" md="10" xl="6">
        <Card>
          <CardHeader>
            <Nav className="justify-content-center" role="tablist" tabs>
              <NavItem>
                <NavLink
                  className={iconPills === "1" ? "active" : ""}
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    setIconPills("1");
                  }}
                >
                  <i className="now-ui-icons objects_umbrella-13"></i>
                  Html5/Css3/JS/Jquery
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={iconPills === "2" ? "active" : ""}
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    setIconPills("2");
                  }}
                >
                  <i className="now-ui-icons shopping_cart-simple"></i>
                  Wordpress/core-PHP/PHP frameworks/MySQL
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={iconPills === "3" ? "active" : ""}
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    setIconPills("3");
                  }}
                >
                  <i className="now-ui-icons shopping_shop"></i>
                  React/Angular/Node.js/Express/Mongo.db
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={iconPills === "4" ? "active" : ""}
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    setIconPills("4");
                  }}
                >
                  <i className="now-ui-icons ui-2_settings-90"></i>
                  Others
                </NavLink>
              </NavItem>
            </Nav>
          </CardHeader>
          <CardBody>
            <TabContent
              className="text-center"
              activeTab={"iconPills" + iconPills}
            >
              <TabPane tabId="iconPills1">

               <a href="https://www.w3schools.com">{/*<img src="https://disenowebakus.net/imagenes/articulos/html5.jpg" style={{width:150}}></img>*/} Tickybox </a><br />
               <a href="https://www.google.com">{/*<img src="https://disenowebakus.net/imagenes/articulos/aprender-css-hojas-de-estilo-en-cascada.jpg" style={{width:150}}></img>*/}Landing page Bicentenario</a><br />
               <a href="https://www.github.com">  Visor - pdf <br /> </a>
               <p>Minimalist personal website</p>
               <p>Random quote generator</p>
               <p>Pomodoro Clock</p>

              </TabPane>
              <TabPane tabId="iconPills2">
              <p>Codeigniter blog</p>
              <p>rutas Colombia</p>
              <p> Solvitour</p>
              <p> Cabañas Colombia</p>

              </TabPane>
              <TabPane tabId="iconPills3">
                <p>Excercise tracker</p>
                <p>React Calculator</p>
                <p>Drum Machine</p>
                <p>Portfolio Website</p>

              </TabPane>
              <TabPane tabId="iconPills4">
                <p>codepen </p>
                <p> php and mongodb CRUD </p>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
        </Col>

      </div>
    </div>
  );
}

export default Proyectos;
