import { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Detail from "../pages/Detail";
import List from "../pages/List";
import Main from "../pages/Main";

const Routes = () => (
  <Suspense fallback={<div />}>
    <Switch>
      <Route path="/detail" component={Detail} />
      <Route path="/list" component={List} />
      <Route path="/" component={Main} />
    </Switch>
  </Suspense>
);

export default Routes;
