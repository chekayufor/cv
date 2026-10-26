import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../styles.lib/theme";
import GlobalStyles from "../styles.lib/global.styles";
import ScrollToTop from "./layout/ScrollToTop";
import TopBar from "./layout/TopBar";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Activity from "./pages/Activity";
import Contact from "./pages/Contact";

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <Router>
        <ScrollToTop />
        <TopBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/experience" component={Experience} />
          <Route path="/education" component={Education} />
          <Route path="/skills" component={Skills} />
          <Route path="/activity" component={Activity} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  </ThemeProvider>
);

export default App;
