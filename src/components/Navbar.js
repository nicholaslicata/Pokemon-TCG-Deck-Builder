
function Navbar({ navActive, toggleNav, closeNav }) {
    return (
      <header className='navbar-container'>
          <div className='logo-container'>
             <h1 className='logo'>Pokemon TCG Deck Builder</h1>
          </div>
          <nav className={navActive ? 'nav-active' : 'nav'}>
            
          </nav>
          <div className='hamburger-btn' onClick={toggleNav}>
            <span className='hamburger-line'></span>
            <span className='hamburger-line'></span>
            <span className='hamburger-line'></span>
          </div>
      </header>
    )
}

export default Navbar;