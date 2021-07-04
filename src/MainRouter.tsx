import { createBrowserHistory } from "history";
import { Router, Route } from "react-router";

import Routes from "./routes";

const MainRouter = () => {
  return (
    <Router history={createBrowserHistory()}>
      <Route component={Routes} />
    </Router>
  );
};

export default MainRouter;
