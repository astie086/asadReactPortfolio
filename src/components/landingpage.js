import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Maud_Stevens_Wagner.jpeg"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <br />
              <h1> Full Stack Web Developer </h1>y<hr />
              <p>
                {" "}
                HTML | CSS | JavaScript | jQuery | Bootstrap | React | MongoDB |
                MySql{" "}
              </p>
              <div className="social-links">
                {/* Facebook */}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f" aria-hidden="true" />
                </a>

                {/* Instagram */}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-instagram" aria-hidden="true" />
                </a>

                {/* LinkedIN */}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
