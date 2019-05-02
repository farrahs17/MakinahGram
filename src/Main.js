import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./homepage/Homepage.js";
import User from "./user/User.js";
import MyAccount from "./myaccount/MyAccount.js";

function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/users/2" component={MyAccount} />
        <Route path="/users/:id" component={User} />
      </Switch>
    </main>
  );
}

export default Main;
