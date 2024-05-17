import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/home/Home";

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
    <Home />
    </>
  )
}

export default App
