import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';

function App() {
  const [navActive, setNavActive] = useState(false);

  function toggleNav(){
    setNavActive(!navActive);
  }

  function closeNav() {
    setNavActive(false);
  }

  return (
    <main>
      <Navbar navActive={navActive} toggleNav={toggleNav} closeNav={closeNav} />
      
    </main>
  );
}

export default App;
