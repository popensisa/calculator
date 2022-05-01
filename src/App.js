import React from "react"
import { Footer } from "./components/Layout/Footer";
import { Layout } from "./components/Layout/Layout";
import { Wrap } from "./components/Wrap";

function App() {
  return (
    <div className="App">
      <Layout/>
      <div className="content">
        <Wrap/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
