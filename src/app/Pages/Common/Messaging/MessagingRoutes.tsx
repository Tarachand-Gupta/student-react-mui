import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ChatList from "./Components/ChatList";
import MainChatScreen from "./Components/MainChatScreen";

const MessagingRoutes = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <ChatList />
      </Route>

      <Route exact path={`${path}/:chatId`}>
        <MainChatScreen />
      </Route>
    </Switch>
  );
};

export default MessagingRoutes;
