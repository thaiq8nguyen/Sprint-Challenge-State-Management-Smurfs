import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "../store";
import { Container, Header } from "semantic-ui-react";
import SmurfVillage from "../components/SmurfVillage/SmurfVillage";
import "./App.css";
class App extends Component {
  state = {
    heroStyle: {
      backgroundColor: "#3cb5e5",
      padding: "5rem",
      fontSize: "5rem",
      margin: "4rem 0",
      textAlign: "center"
    },
    headerStyle: {}
  };
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Container style={this.state.heroStyle}>
            <Header className="headerTitle" inverted>
              Smurf Village
            </Header>
          </Container>
          <SmurfVillage />
        </div>
      </Provider>
    );
  }
}

export default App;
