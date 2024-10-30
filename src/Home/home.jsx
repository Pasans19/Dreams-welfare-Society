import React from 'react';
import MyNavbar from '../Components/molecules/Navbar/navbar';
import Footer from '../Components/molecules/Foter/footer';
import Index from '../Components/index page';

function Homemain() {
  return (
    <div className="App">
      <MyNavbar/>
      <Index/>
      <Footer/>
    </div>
  );
}

export default Homemain;
