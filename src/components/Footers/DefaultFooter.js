/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>

          <div className="text-center" id="copyright">
            © {new Date().getFullYear()}. Design and developed by {" "}
            <a
              href="https://www.linkedin.com/in/juan-david-romero-guaqueta-85a3b2127/"
              target="_blank"
            >
              Juan David R.
            </a>

            .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
