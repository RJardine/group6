import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ForgotPassword from "./components/auth/ForgotPassword";
import ChangePassword from "./components/auth/ChangePassword";
import Home from "./components/pages/Home";
import BookService from "./components/pages/BookService";
import BookPage from "./components/pages/BookPage";
import Faq from "./components/pages/Faq";
import ContactUs from "./components/pages/ContactUs";
import Receipts from "./components/pages/Receipts";
import MyAccount from "./components/pages/MyAccount";
import Payment from "./components/pages/Payment";
import Feedback from "./components/pages/Feedback";
import AppNavbar from "./components/layout/AppNavbar";
import BookingDetails from "./components/bookings/BookingDetails";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <AppNavbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/auth/login" component={Login} />
            <Route path="/auth/register" component={Register} />
            <Route path="/forgot_password" component={ForgotPassword} />
            <Route path="/change_password" component={ChangePassword} />
            <Route path="/bookpage" component={BookPage} />
            <Route path="/faq" component={Faq} />
            <Route path="/contact_us" component={ContactUs} />
            <Route path="/receipts" component={Receipts} />
            <Route path="/my_account" component={MyAccount} />
            {/* <Route path="/payment" component={Payment} /> */}
            {/* <Route path="/feedback" component={Feedback} /> */}
            <Route path="/booking/:id" component={BookingDetails} />
          </Switch>
          <div className="container" />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
