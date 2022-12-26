import React from "react";
import {
  Advertise,
  Explore,
  Hero,
  Memory,
  Navbar,
  Pricing,
} from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Memory />
      <Explore />
      <Advertise />
      <Pricing />
    </>
  );
}

export default App;
