import React from "react";
import {
  Badge,
  NavItem,
  NavLink,
  Nav,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Container,
  Row,
  Col
} from "reactstrap";

function Habilidades(){
  const [pills, setPills] = React.useState("2");

  return (
    <div className="container">
      <div className="row">

      <div className="col-sm-12"><h4>Technical skills</h4></div>
      <Col md="6">

        <img src="https://i.pinimg.com/originals/c7/f2/bd/c7f2bdaefec574dd1439fb5c10daa2a0.png" style={{width:80}} />
        <div className="progress-container">
          <span className="progress-badge">html5 / css3</span>
          <Progress max="100" value="100">
            <span className="progress-value">100%</span>
          </Progress>
        </div>
        <br />
        <img src="https://caseydemo.github.io/images/icons/JavascriptLogo.png" style={{width:80}} />
        <div className="progress-container ">
          <span className="progress-badge">JS / Jquery</span>
          <Progress max="100" value="90">
            <span className="progress-value">90%</span>
          </Progress>
        </div>
        <br />
        <br />
        <img src="https://marufsarker.github.io/assets/posts/2016/react-redux-graphql.png" style={{width:180}} />
        <div className="progress-container ">
          <span className="progress-badge">React & JS Front-End frameworks</span>
          <Progress max="100" value="80">
            <span className="progress-value">80%</span>
          </Progress>
        </div>
        <br />
        <img src="https://cdn3.altiria.com/wp-content/uploads/2017/03/node-logo.jpg" style={{width:80}} />
        <div className="progress-container">
          <span className="progress-badge">Node.js / Express</span>
          <Progress max="100" value="70">
            <span className="progress-value">70%</span>
          </Progress>
        </div>
        <br></br>

      </Col>

      <Col md="6">

        <img src="https://zulip.com/static/images/integrations/logos/wordpress.svg" style={{width:80}} />
        <div className="progress-container">
          <span className="progress-badge">E-commerce</span>
          <Progress max="100" value="100">
            <span className="progress-value">100%</span>
          </Progress>
        </div>
        <br />
        <img src="https://www.shareicon.net/data/256x256/2015/10/06/112719_development_512x512.png" style={{width:80}} />
        <div className="progress-container">
          <span className="progress-badge">core php / php frameworks </span>
          <Progress max="100" value="90">
            <span className="progress-value">100%</span>
          </Progress>
        </div>
        <br />
        <img src="https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/19218518301553750371-256.png" style={{width:80}} />
        <div className="progress-container">
          <span className="progress-badge">MySql</span>
          <Progress max="100" value="90">
            <span className="progress-value">90%</span>
          </Progress>
        </div>
        <br />
        <img src="https://davidrengifo.files.wordpress.com/2017/09/mongodb-logo.png" style={{width:80}} />
        <div className="progress-container ">
          <span className="progress-badge">Mongo.db </span>
          <Progress max="100" value="80">
            <span className="progress-value">80%</span>
          </Progress>
        </div>
        <br />

        <br></br>

      </Col>

      </div>
    </div>
  );
}

export default Habilidades;
