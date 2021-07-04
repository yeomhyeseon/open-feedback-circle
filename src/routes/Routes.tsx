import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import GNB from "../components/layout/GNB";
import Detail from "../pages/Detail";
import List from "../pages/List";
import Main from "../pages/Main";

const Routes = () => (
  <>
    <GNB />
    <StyledContainer>
      <Suspense fallback={<div />}>
        <Switch>
          <Route path="/detail" component={Detail} />
          <Route path="/list" component={List} />
          <Route path="/" component={Main} />
        </Switch>
      </Suspense>
    </StyledContainer>
  </>
);

const StyledContainer = styled.div`
  width: 50%;
  margin: 60px auto;
`;

export default Routes;
