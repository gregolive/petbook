import { StyledHeader, NavbarSwitch, Slider, SwitchIcon } from './styled'
import LogoLink from '../Logo';

interface NavProps {
  dark: boolean;
  toggleTheme: Function;
};

const Nav = ({ dark, toggleTheme }: NavProps) => {
  return (
    <StyledHeader>
      <div>
        <LogoLink link='/' size='3rem' />
        
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
