import React, { useState, useEffect } from "react";
import {
  SosialLinksList,
  CarouselData,
  EducationData,
  PrivateData,
  Description
} from "./_api";

const CVContext = React.createContext();
const { Provider } = CVContext;
// const  Provider = CVContext.Provider;

const CVProvider = ({ children }) => {
  const [sosialData, setSosialData] = useState([]);
  const [slidsData, setSlidsData] = useState([]);
  const [edData, setEdData] = useState([]);
  const [myData, setMyData] = useState([]);
  const [descriptionData, setdescriptionData] = useState([]);

  useEffect(() => {
    setSosialData(SosialLinksList);
    setSlidsData(CarouselData.reverse());
    setEdData(EducationData);
    setMyData(PrivateData);
    setdescriptionData(Description);
  }, []);

  // state = valuyes to display
  const state = {
    sosialData,
    slidsData,
    edData,
    myData,
    descriptionData
    // things
  };
  // actions = callbacks to invoke
  const actions = {
    // add_message,
    // make_thing
  };

  return <Provider value={{ ...state, ...actions }}> {children} </Provider>;
  // return <Provider value={ { messages,things,add_message,make_thing} }> {children} </Provider>;
};

export { CVProvider, CVContext };
