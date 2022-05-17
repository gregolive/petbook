import { useState } from 'react';
import { StyledHeader, NavbarLogo, NavbarSwitch, Slider, SwitchIcon, NavbarBurger, NavbarMenu, NavbarLink } from './StyledHeader'

const Nav = ({ toggleTheme, dark, scroll }) => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => setMenu(!menu);
  const closeMenu = () => setMenu(false);

  return (
    <StyledHeader>
      <NavbarLogo href='#'>
        Petbook
      </NavbarLogo>

      <NavbarSwitch>
        <input type='checkbox' onChange={toggleTheme} checked={(dark) ? 'checked' : ''} />
        <Slider />
        <SwitchIcon className='moon'>🌜</SwitchIcon>
        <SwitchIcon className='sun'>🌞</SwitchIcon>
      </NavbarSwitch>

      <NavbarBurger onClick={toggleMenu}>
        <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='24' height='24' viewBox='0 0 24 24' fill='currentColor'><path d='M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z' /></svg>
      </NavbarBurger>

      <NavbarMenu className={(menu) ? 'navbar-menu open' : 'navbar-menu close'}>
        <NavbarLink href='' onClick={closeMenu}>Link</NavbarLink>
        <NavbarLink href='' onClick={closeMenu}>Link</NavbarLink>
        <NavbarLink href='' onClick={closeMenu}>Link</NavbarLink>
      </NavbarMenu>
    </StyledHeader>
  );
};

export default Nav;
