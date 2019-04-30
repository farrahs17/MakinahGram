import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route } from "react-router-dom";
import PostsList from "./postsList.js";
import Users from "./users.js";
import MyAccount from "./MyAccount";

function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={PostsList} />
        <Route exact path="/users/2" component={MyAccount} />
        <Route path="/users/:id" component={Users} />
      </Switch>
    </main>
  );
}

export default Main;
