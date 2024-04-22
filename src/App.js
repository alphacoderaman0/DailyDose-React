import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Header from "./components/Header";

const App = () => {
  const pageSize = 10;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  // light mode , Dark mode code Starts
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "red";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "red";
    }
  };
  // light mode , Dark mode code ends

  return (
    <div>
      <Router>
        <LoadingBar height={"3px"} color="#f11946" progress={progress} />
        <Header/>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route path="/about" element={<About mode={mode}/>}/>
          <Route
            exact
            path="/"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="home"
                pageSize={pageSize}
                country={"in"}
                mode= {mode}
                />
              }
          />
          <Route
            exact
            path="/science"
            element={
              <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="science"
              pageSize={pageSize}
              country={"in"}
              category={"science"}
              mode= {mode}
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="business"
              pageSize={pageSize}
              country={"in"}
              category={"business"}
              mode= {mode}
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="entertainment"
              pageSize={pageSize}
              country={"in"}
              category={"entertainment"}
              mode= {mode}
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="sports"
              pageSize={pageSize}
              country={"in"}
              category={"sports"}
                mode= {mode}
                />
              }
          />
          <Route
            exact
            path="/health"
            element={
              <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="health"
              pageSize={pageSize}
              country={"in"}
              category={"health"}
              mode= {mode}
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="general"
              pageSize={pageSize}
              country={"in"}
              category={"general"}
              mode= {mode}
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="technology"
              pageSize={pageSize}
              country={"in"}
              category={"technology"}
              mode= {mode}
              />
            }
          />
        </Routes>

      </Router>
      <Footer mode={mode}/>
    </div>
  );
};

export default App;
