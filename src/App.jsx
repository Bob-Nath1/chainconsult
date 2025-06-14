import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/NavBar.jsx"
import Hero from './components/Hero.jsx';
import TopBar from "./components/Topbar.jsx";
import './App.css';
import Design from './components/Design.jsx';
import Service from './components/Service.jsx';
import Blackground from './components/Blackground.jsx';
import Quality from './components/Quality.jsx'
import Footer from "./components/Footer.jsx"
import Navimg from "./components/Navimg.jsx"
import Clients from "./components/Clients.jsx"



const items = [
  { image: 'bamboo 1.png' },
  { image: 'palpensions 2.png' },
  { image: 'verdant3.png' },
  { image: 'gacmotor 4.png' }
  // Add more items here...
];


function App() {
  return (
    <div className='container'> 
      <TopBar />
      <Navbar />
      <Navimg />
      <Hero />
      <Clients />
      <Design items={items} />
      <Service />
      <Blackground />
      <Quality />
      <Footer />
      </div>
  );
}

export default App;
