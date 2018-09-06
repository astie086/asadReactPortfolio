import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header title="Asad Haider" scroll>
            <Navigation>
              <a href="#">About Me</a>
              <a href="#">Portfolio</a>
              <a href="#">Resume</a>
              <a href="#">Contact Me</a>
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
