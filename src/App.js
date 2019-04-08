import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ForgotPassword from "./components/auth/ForgotPassword";
import ChangePassword from "./components/auth/ChangePassword";
import Home from "./components/pages/Home";
import Book from "./components/pages/Book";
import Search from "./components/pages/Search";
import Faq from "./components/pages/Faq";
import ContactUs from "./components/pages/ContactUs";
import MyAccount from "./components/pages/MyAccount";
import AppNavbar from "./components/layout/AppNavbar";
import BookingDetails from "./components/bookings/BookingDetails";
import SearchDetails from "./components/pages/SearchDetails";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <AppNavbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/auth/login" component={Login} />
              <Route path="/auth/register" component={Register} />
              <Route path="/forgot_password" component={ForgotPassword} />
              <Route path="/change_password" component={ChangePassword} />
              <Route path="/bookpage" component={Search} />
              <Route path="/job/:id" component={SearchDetails} />
              <Route path="/:id/book" component={Book} />
              <Route path="/faq" component={Faq} />
              <Route path="/about_us" component={About} />
              <Route path="/contact_us" component={ContactUs} />
              <Route path="/my_account" component={MyAccount} />
              <Route path="/booking/:id" component={BookingDetails} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
