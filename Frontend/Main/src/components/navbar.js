import React, { useState, useEffect} from 'react';
import { Button } from './Button';
import { Link , useHistory } from 'react-router-dom';
import './navbar.css';
import imgs from "./logo.png";



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

          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
           <img src={imgs} style={{height:"300px"}}/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          {

            localStorage.getItem('user-info') ?
              <>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                    <Link to='/template' className='nav-links' onClick={closeMobileMenu}>
                      Resume
              </Link>
                  </li>
                  <li className='nav-item'>
                    <Link
                      to='/services'
                      className='nav-links'
                      onClick={closeMobileMenu}
                    >
                      CV
              </Link>
                  </li>
                  <li className='nav-name'>
                  {user.username}{' '}{' '}
                  </li>
                </ul>
                
                {
                  
                  localStorage.getItem('user-info') ?
                  <Button buttonStyle='btn--outline' onClick={logout}>LOGOUT</Button>
                  : null
                }
                
              </>
              :
              <>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                    <Link to='/template' className='nav-links' onClick={closeMobileMenu}>
                      Resume
              </Link>
                  </li>
                  <li className='nav-item'>
                    <Link
                      to='/services'
                      className='nav-links'
                      onClick={closeMobileMenu}
                    >
                      CV
              </Link>
                  </li>

                </ul>
                <Link to="/sign-In">
                <Button buttonStyle='btn--outline'>LOGIN/SIGN UP</Button>
                </Link>
              </>
          }

               

        </div>

        

      </nav>
    
    </>
  );
}

export default Navbar;
