import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FloatingNav from ".";
import Home from "../../Pages";
import Noticeboard from "../../Pages/Common/Noticeboard/Noticeboard";
import NavMenu from "./NavMenu";

const NavbarRoutes = () => {
  // if (isLoading) return <loading/>
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
      </Switch>
    </Router>
  );
};

export default NavbarRoutes;
