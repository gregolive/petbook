import { StyledHeader, NavbarSwitch, Slider, SwitchIcon } from './StyledHeader'
import Logo from '../logo/Logo';

interface NavProps {
  dark: boolean;
  toggleTheme: Function;
};

const Nav = ({ dark, toggleTheme }: NavProps) => {
  return (
    <StyledHeader>
      <div>
        <Logo href='/' />
        
        <NavbarSwitch>
          <input type='checkbox' onChange={() => toggleTheme()} checked={dark} />
          <Slider />
          <SwitchIcon className='moon'>🌜</SwitchIcon>
          <SwitchIcon className='sun'>🌞</SwitchIcon>
        </NavbarSwitch>
      </div>
    </StyledHeader>
  );
};

export default Nav;
