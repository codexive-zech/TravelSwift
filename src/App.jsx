import React from "react";
import {
  Advertise,
  Banner,
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
      <Banner />
    </>
  );
}

export default App;
