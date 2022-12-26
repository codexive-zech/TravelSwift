import React from "react";
import {
  Advertise,
  Banner,
  Explore,
  Footer,
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
      <Footer />
    </>
  );
}

export default App;
