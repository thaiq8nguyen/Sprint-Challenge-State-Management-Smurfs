import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "../store"
import SmurfVillage from "../components/SmurfVillage/SmurfVillage"
import "./App.css";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <div className="App">
          <SmurfVillage/>
        </div>
      </Provider>
      
    );
  }
}

export default App;
