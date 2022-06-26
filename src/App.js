import "./App.css";
import OpeningPage from "./containers/OpeningPage/OpeningPage";
import ExplanationPage from "./containers/ExplanationPage/ExplanationPage";
import AmericanQuestionPage from "./containers/AmericanQuestionPage/AmericanQuestionPage";
import Map1Page from "./containers/Map1Page/Map1Page";
import Map2Page from "./containers/Map2Page/Map2Page";
import FinishedPage from "./containers/FinishedPage/FinishedPage";
import AboutPage from "./containers/AboutPage/AboutPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [useCurrQuestion, setUseCurrQuestion] = useState(0);
  const [currExpPage, setCurrExpPage] = useState(9);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<OpeningPage />} />
          <Route
            exact
            path="/ExplanationPage"
            element={
              <ExplanationPage
                useCurrQuestion={useCurrQuestion}
                setUseCurrQuestion={setUseCurrQuestion}
                currExpPage={currExpPage}
                setCurrExpPage={setCurrExpPage}
              />
            }
          />
          <Route
            exact
            path="/AmericanQuestionPage"
            element={
              <AmericanQuestionPage
                useCurrQuestion={useCurrQuestion}
                setUseCurrQuestion={setUseCurrQuestion}
                currExpPage={currExpPage}
                setCurrExpPage={setCurrExpPage}
              />
            }
          />
          <Route
            exact
            path="/Map1Page"
            element={
              <Map1Page
                currExpPage={currExpPage}
                setCurrExpPage={setCurrExpPage}
              />
            }
          />
          <Route
            exact
            path="/Map2Page"
            element={
              <Map2Page
                currExpPage={currExpPage}
                setCurrExpPage={setCurrExpPage}
              />
            }
          />
          <Route exact path="/FinishedPage" element={<FinishedPage />} />
          <Route exact path="/AboutPage" element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
