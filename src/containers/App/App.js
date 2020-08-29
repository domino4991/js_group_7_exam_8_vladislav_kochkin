import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Header from "../../components/Header/Header";
import MainPage from "../MainPage/MainPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header />
          <Switch>
              <Route path="/" exact component={MainPage} />
              <Route path="/quotes/:category" component={MainPage} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
