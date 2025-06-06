import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import "./css/reset.css";

function App() {
  const images = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150"
  ];

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
