import React from "react";
import { Switch, Route } from "react-router-dom";
import TopBar from "./TopBar";
import Footer from "./Footer";
import Home from "../pages/Home";
import About from "../pages/About";
import Experience from "../pages/Experience";
import Education from "../pages/Education";
import Skills from "../pages/Skills";
import Activity from "../pages/Activity";
import Contact from "../pages/Contact";

const SiteLayout = () => (
  <>
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
  </>
);

export default SiteLayout;
