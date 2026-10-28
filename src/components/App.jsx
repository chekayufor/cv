import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../styles.lib/theme";
import GlobalStyles from "../styles.lib/global.styles";
import ScrollToTop from "./layout/ScrollToTop";
import SiteLayout from "./layout/SiteLayout";

const Admin = lazy(() => import("./admin/Admin"));

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <Router>
        <ScrollToTop />
        <Switch>
          <Route
            path="/admin"
            render={() => (
              <Suspense fallback={null}>
                <Admin />
              </Suspense>
            )}
          />
          <Route component={SiteLayout} />
        </Switch>
      </Router>
    </>
  </ThemeProvider>
);

export default App;
