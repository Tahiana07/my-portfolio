import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
import { IoClose, IoMenu } from 'react-icons/io5';
import { useMediaQuery } from 'react-responsive';
import './Header.css';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  // const [isVisible, setIsVisible] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: '1150px' });

  const toggleMenu = () => {
    setShowMenu(true);
  };

  const closeMenuOnMobile = () => {
    if (isMobile) {
      setShowMenu(false);
    }
  };

  const renderNavLinks = () => {
    const listClassName = isMobile ? "nav__list" : "nav__list__web";
    const linkClassName = "nav__link";

    return (
      <ul className={listClassName}>
        <li>
          <a href="http://www.google.com" className={linkClassName} onClick={closeMenuOnMobile}>
            Accueil
          </a>
        </li>
        <li>
          <a href="http://www.google.com" className={linkClassName} onClick={closeMenuOnMobile}>
            Compétences
          </a>
        </li>
        <li>
          <a href="http://www.google.com" className={linkClassName} onClick={closeMenuOnMobile}>
            Projets
          </a>
        </li>
        <li>
          <a href="http://www.google.com" className={linkClassName} onClick={closeMenuOnMobile}>
            Contactez Moi
          </a>
        </li>
      </ul>
    );
  };

  return (
    <header className="header">
      <nav className="nav container">
        <h1>PORTFOLIO</h1>

        {isMobile && !showMenu && (
          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <IoMenu />
          </div>
        )}

        {isMobile ? (
          <>
            { showMenu && (
              <>
                <div
                  className={`show-menu ${showMenu ? 'visible' : 'hidden'}`}
                  id="nav-menu"
                >
                  {renderNavLinks()}
                  <div className="nav__close" id="nav-close" onClick={closeMenuOnMobile}>
                    <IoClose />
                  </div>
                </div>
              </>
            )}
          </>
        ) : (
          renderNavLinks()
        )}

        {/*<div
          className={`nav__menu ${showMenu ? "showMenu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li className="nav__item">
              <a href="" className="nav__link" onClick={ closeMenuOnMobile }>
                Accueil
              </a>          
            </li>
            <li className="nav__item">
              <a href="" className="nav__link" onClick={ closeMenuOnMobile }>
                Compétences
              </a>
            </li>
            <li className="nav__item">
              <a href="" className="nav__link" onClick={ closeMenuOnMobile }>
                Projets
              </a>
            </li>
            <li className="nav__item">
              <a href="" className="nav__link" onClick={ closeMenuOnMobile }>
                Contact Me
              </a>  
            </li>
          </ul>
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <IoClose />
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <IoMenu />
        </div>*/}

      </nav>
    </header>
  );
};

export default Header;
