import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Progressor from "./components/Progressor";
import Banner from "./components/Banner";
import Offer from "./components/Offer";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Burger from "./components/Burger";
import ProductList from "./components/ProductList";
import Reservation from "./components/Reservation";
import Menuitem from "./components/Menuitem";



export default function App() {
  return (
    <div className="bg-gradient-to-r from-black to-slate-700 min-h-screen">
      <Navbar />
      <Carousel />
      <Progressor />
      <Burger />
      <Banner />
      <ProductList />
      <Menuitem/>
      <Offer />
      <Card />
      <Reservation />
      <Footer />
    
    </div>
  );
}
