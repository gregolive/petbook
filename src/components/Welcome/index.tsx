import { useState } from 'react';
import Banner from './Banner';
import Footer from '../Footer';
import Login from '../User/Login';
import Register from '../User/Register';

const Welcome = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      <Banner setShowLogin={setShowLogin} setShowSignup={setShowSignup} />
      <Footer setShowLogin={setShowLogin} setShowSignup={setShowSignup} />
      {showLogin && <Login setShowLogin={setShowLogin} />}
      {showSignup && <Register />}
    </>
  );
};

export default Welcome;
