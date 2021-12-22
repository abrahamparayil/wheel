import React, { useEffect, useState } from "react";

import { PageLoader } from "neetoui/v2";
import PropTypes from "prop-types";
import * as R from "ramda";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { setAuthHeaders, registerIntercepts } from "apis/axios";
import { initializeLogger } from "common/logger";
import Login from "components/Authentication/Login";
import PasswordReset from "components/Authentication/ResetPassword";
import Signup from "components/Authentication/Signup";
import PrivateRoute from "components/Common/PrivateRoute";
import Dashboard from "components/Dashboard";
import { useAuthState, useAuthDispatch } from "contexts/auth";
import { useUserDispatch, useUserState } from "contexts/user";

const Main = props => {
  const [isLoading, setIsLoading] = useState(true);
  const { authToken } = useAuthState();
  const { user: userContextState } = useUserState();
  const userDispatch = useUserDispatch();
  const authDispatch = useAuthDispatch();
  const currentUser = userContextState || props?.user;
  const isLoggedIn = !R.apply(
    R.or,
    R.map(R.either(R.isNil, R.isEmpty), [authToken, currentUser])
  );

  useEffect(() => {
    userDispatch({ type: "SET_USER", payload: { user: props?.user } });
    initializeLogger();
    registerIntercepts(authDispatch);
    setAuthHeaders(setIsLoading);
  }, [authDispatch, props?.user, userDispatch]);

  if (isLoading) {
    return (
      <div className="h-screen">
        <PageLoader />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <ToastContainer />
      <Switch>
        <Route exact path="/my/password/new" component={PasswordReset} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute
          path="/"
          redirectRoute="/login"
          condition={isLoggedIn}
          component={Dashboard}
        />
      </Switch>
    </BrowserRouter>
  );
};

Main.propTypes = {
  user: PropTypes.object,
};

export default Main;
