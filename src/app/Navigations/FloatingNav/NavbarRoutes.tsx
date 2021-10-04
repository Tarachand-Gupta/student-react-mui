import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import FloatingNav from "./FloatingNav";
import Home from "../../Pages";
import Messaging from "../../Pages/Common/Messaging/Messaging";
import Noticeboard from "../../Pages/Common/Noticeboard/Noticeboard";
import NavMenu from "./NavMenu";

const NavbarRoutes = () => {
  // if (isLoading) return <loading/> remember to add
  return (

    <Router>
      <FloatingNav show={true} />
      <NavMenu show={true} />
      <div className="py-4"></div>
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/noticeboard" exact>
          <Noticeboard />
        </Route>

        <Route path="/messaging" exact>
          <Messaging />
        </Route>

        <Redirect to='/' />
      </Switch>
    </Router>
  );
};

export default NavbarRoutes;
