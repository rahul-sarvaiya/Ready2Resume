import React, { useState, useEffect} from 'react';
import { Button } from './Button';
import { Link , useHistory } from 'react-router-dom';
import './navbar.css';




function Navbar() {
  let user= JSON.parse(localStorage.getItem('user-info'));
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  
  const history=useHistory();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  function logout()
  {
    localStorage.clear();
    history.push('/sign-In');
  }

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  
  window.addEventListener('resize', showButton);


  return (
    <>
      <nav className='navbar'>

        <div className='navbar-container'>

          <a href='http://localhost:3000/' className='navbar-logo' onClick={closeMobileMenu}>
            make Your resume
            <i class='fab fa-typo3' />
          </a>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

        
              <>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                    <a href='http://localhost:3000/template' className='nav-links' onClick={closeMobileMenu}>
                      Resume
              </a>
                  </li>
                  <li className='nav-item'>
                    <a
                      href='http://localhost:3000/services'
                      className='nav-links'
                      onClick={closeMobileMenu}
                    >
                      CV
              </a>
                  </li>

                </ul>
               
              </>
         
               

        </div>

        

      </nav>
    
    </>
  );
}

export default Navbar;
