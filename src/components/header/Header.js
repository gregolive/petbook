import { StyledHeader, NavbarSwitch, Slider, SwitchIcon } from './StyledHeader'
import Logo from '../logo/Logo';

const Nav = ({ toggleTheme, dark }) => {
  return (
    <StyledHeader>
      <div>
        <Logo href='/' />
        
        <NavbarSwitch>
          <input type='checkbox' onChange={toggleTheme} checked={(dark) ? 'checked' : ''} />
          <Slider />
          <SwitchIcon className='moon'>🌜</SwitchIcon>
          <SwitchIcon className='sun'>🌞</SwitchIcon>
        </NavbarSwitch>
      </div>

      <div>
        
      </div>
    </StyledHeader>
  );
};

export default Nav;
