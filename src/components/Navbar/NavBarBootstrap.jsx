import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from 'mdb-react-ui-kit';
import './NavBarBootstrap.css';

const NavBarBootstrap = ({ activeSection }) => {
  const [openNavRight, setOpenNavRight] = useState(false);

  return (
    <MDBNavbar sticky expand='lg' light style={{ backgroundColor: '#02255F' }}> {/* bgColor='light */}
      <MDBContainer fluid>
        <MDBNavbarBrand style={{ color: 'white', fontWeight: 'bold' }}>PORTFOLIO</MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarRightAlignExample'
          aria-controls='navbarRightAlignExample'
          aria-expanded='false'
          aria-label='Toggle navigation'
          style={{ color: '#fff' }}
          onClick={() => setOpenNavRight(!openNavRight)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openNavRight} className='marge-droite'>
          <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
            <MDBNavbarItem className={ `${activeSection === 'apropos' ? 'nav-link-active' : ''}`}>
              <MDBNavbarLink 
                aria-current='page' 
                href='#apropos'
                style={{ color: 'white' }}
              >
                A propos
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem className={ `${activeSection === 'competences' ? 'nav-link-active' : ''}` }>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' style={{ color: 'white' }}>
                  Compétences
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link href="#programmations">Programmations</MDBDropdownItem>
                  <MDBDropdownItem link href="#autres-competences">Autres compétences</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem className={ activeSection === "projets" ? "nav-link-active" : "" }>
              <MDBNavbarLink href='#projets' style={{ color: 'white' }}>Projets</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem className={ activeSection === "contacts" ? "nav-link-active" : "" }>
              <MDBNavbarLink href='#contacts' style={{ color: 'white' }} aria-disabled='true'>
                Me contacter
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default NavBarBootstrap;