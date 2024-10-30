import React from 'react';
import MyNavbar from '../Components/molecules/Navbar/navbar';

import Footer from '../Components/molecules/Foter/footer';
import SignInForm from '../Components/molecules/Signin/signin';

function Homemain() {
  return (
    <div className="App">
      <MyNavbar/>
      <SignInForm/>
      <Footer/>
    </div>
  );
}

export default Homemain;
