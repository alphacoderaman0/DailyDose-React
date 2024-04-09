import React, { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 10;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  // light mode , Dark mode code Starts
  const [mode, setMode] = useState("light");
  const [btnText, setBtnText] = useState("Light Mode");
  
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setBtnText("Dark Mode");
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "#fff";
    } else {
      setMode("light");
      setBtnText("Light Mode");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#042743";
    }
  };
  // light mode , Dark mode code ends

  return (
    <div>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <LoadingBar height={"3px"} color="#f11946" progress={progress} />
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
    </div>
  );
};

export default App;
