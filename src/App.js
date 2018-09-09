import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="Asad Haider" scroll>
            <Navigation>
              <Link to="/aboutme">My Story</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/contact">Contact Me</Link>
            </Navigation>
          </Header>
          <Drawer title="Asad Haider">
            <Navigation>
              <a href="#">Gmail</a>
              <a href="#">LinkedIN</a>
              <a href="#">GitHub</a>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
