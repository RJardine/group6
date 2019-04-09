import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/pages/Home";
import Book from "./components/pages/Book";
import Search from "./components/pages/Search";
import Faq from "./components/pages/Faq";
import ContactUs from "./components/pages/ContactUs";
import AppNavbar from "./components/layout/AppNavbar";
import BookingDetails from "./components/bookings/BookingDetails";
import SearchDetails from "./components/pages/SearchDetails";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import MyDetails from "./components/pages/MyDetails";
import { UserIsAuthenticated, UserIsNotAuthenticated } from "./config/auth";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <AppNavbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                path="/auth/login"
                component={UserIsNotAuthenticated(Login)}
              />
              <Route
                path="/auth/register"
                component={UserIsNotAuthenticated(Register)}
              />
              <Route path="/bookpage" component={UserIsAuthenticated(Search)} />
              <Route
                path="/job/:id"
                component={UserIsAuthenticated(SearchDetails)}
              />
              <Route path="/:id/book" component={UserIsAuthenticated(Book)} />
              <Route path="/faq" component={Faq} />
              <Route path="/about_us" component={About} />
              <Route
                path="/contact_us"
                component={UserIsAuthenticated(ContactUs)}
              />
              <Route
                path="/my_account"
                component={UserIsAuthenticated(MyDetails)}
              />
              <Route
                path="/booking/:id"
                component={UserIsAuthenticated(BookingDetails)}
              />
              <Route component={UserIsAuthenticated(NotFound)} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
