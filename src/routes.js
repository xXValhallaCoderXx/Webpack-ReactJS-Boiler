import React, { Fragment } from "react";
import { Route, Router } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import PageOne from "./app/pageOne";
import PageTwo from "./app/pageTwo";
import PageThree from "./app/pageThree";

const history = createHistory();

const root = () => {
  return (
    <Router history={history}>
      <Fragment>
        <Route exact path="/" component={PageOne} />
        <Route path="/two" component={PageTwo} />
        <Route path="/three" component={PageThree} />
      </Fragment>
    </Router>
  );
};

export default root;