import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/pages/Home";
import BookPage from "./components/pages/BookPage";
import Faq from "./components/pages/Faq";
import ForgotPassword from "./components/auth/ForgotPassword";
import ChangePassword from "./components/auth/ChangePassword";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <Home /> */}
          <Switch>
            <Route exact path="/home" component={Home} />
          </Switch>
          <Switch>
            <Route exact path="/bookpage" component={BookPage} />
          </Switch>
          <Switch>
            <Route exact path="/auth/login" component={Login} />
          </Switch>
          <Switch>
            <Route exact path="/auth/register" component={Register} />
          </Switch>
          <Switch>
            <Route exact path="/faq" component={Faq} />
          </Switch>
          <Switch>
            <Route exact path="/forgot_password" component={ForgotPassword} />
          </Switch>
          <Switch>
            <Route exact path="/change_password" component={ChangePassword} />
          </Switch>
          <div className="container" />
        </div>
      </Router>
    );
  }
}

export default App;
