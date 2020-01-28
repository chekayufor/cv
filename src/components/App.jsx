import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Root from './Root';
import Gallery from './Gallery';
// import EducationGallery from "./EducationGallery";

const App = () => {
  return (
    <>
      <Router>
        <Route exact path="/" component={Root} />
        <Route path="/Gallery" component={Gallery} />
      </Router>
    </>
  );
};

export default App;
