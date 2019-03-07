import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/pages/Home";
import BookPage from "./components/pages/BookPage";
import Faq from "./components/pages/Faq";
import ForgotPassword from "./components/auth/ForgotPassword";
import ChangePassword from "./components/auth/ChangePassword";
import AppNavbar from "./components/layout/AppNavbar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <AppNavbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/bookpage" component={BookPage} />
            <Route path="/auth/login" component={Login} />
            <Route path="/auth/register" component={Register} />
            <Route path="/faq" component={Faq} />
            <Route path="/forgot_password" component={ForgotPassword} />
            <Route path="/change_password" component={ChangePassword} />
          </Switch>
          <div className="container" />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
