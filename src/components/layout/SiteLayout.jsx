import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import TopBar from "./TopBar";
import Footer from "./Footer";
import Home from "../pages/Home";
import About from "../pages/About";
import Experience from "../pages/Experience";
import Education from "../pages/Education";
import Skills from "../pages/Skills";
import Activity from "../pages/Activity";
import Contact from "../pages/Contact";

const SiteLayout = () => {
  const location = useLocation();

  return (
    <>
      <TopBar />
      <TransitionGroup component={null}>
        <CSSTransition key={location.pathname} classNames="page" timeout={{ enter: 320, exit: 0 }}>
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/experience" component={Experience} />
            <Route path="/education" component={Education} />
            <Route path="/skills" component={Skills} />
            <Route path="/activity" component={Activity} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </>
  );
};

export default SiteLayout;
