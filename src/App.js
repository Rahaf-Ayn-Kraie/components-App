import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import "./css/reset.css";
import pho1 from "./img/pho1.jpg";
import pho2 from "./img/pho2.jpg";
import pho3 from "./img/pho3.jpg";
import pho4 from "./img/pho4.jpg";
function App() {
  const images = [pho1, pho2, pho3, pho4];

  return (
    <>
      <Header />
      <Banner title="Welcome to React Page" description="This is a simple banner using props and components." />
      <Gallery images={images} />
      <Footer />
    </>
  );
}

export default App;
