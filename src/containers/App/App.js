import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Header from "../../components/Header/Header";
import MainPage from "../MainPage/MainPage";
import AddNewQuote from "../AddNewQuote/AddNewQuote";
import EditQuotePage from "../EditQuotePage/EditQuotePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header />
          <Switch>
              <Route path="/" exact component={MainPage} />
              <Route path="/quotes/:id/edit" component={EditQuotePage} />
              <Route path="/quotes/:category" component={MainPage} />
              <Route path="/quotes" component={MainPage}/>
              <Route path="/add-quote" component={AddNewQuote} />
              <Route render={() => <h1 style={{textAlign: "center"}}>404 not found</h1>} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
