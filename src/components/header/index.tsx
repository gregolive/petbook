import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Avatar from '@mui/material/Avatar';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { StyledHeader, HeaderStart, NavbarSwitch, Slider, SwitchIcon } from './styled';
import LogoLink from '../Logo';
import avatar from '../../assets/img/avatar.jpg';

interface LinkTabProps {
  icon?: any;
  to: string;
};

const LinkTab = (props: LinkTabProps) => {
  const navigate = useNavigate();

  return (
    <Tab
      component='a'
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        navigate(props.to);
      }}
      {...props}
    />
  );
};

interface NavProps {
  dark: boolean;
  toggleTheme: Function;
};

const Nav = ({ dark, toggleTheme }: NavProps) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <StyledHeader>
      <HeaderStart>
        <LogoLink link='/' size='2.75rem' />
        
        <NavbarSwitch>
          <input type='checkbox' onChange={() => toggleTheme()} checked={dark} />
          <Slider />
          <SwitchIcon className='moon'>🌜</SwitchIcon>
          <SwitchIcon className='sun'>🌞</SwitchIcon>
        </NavbarSwitch>
      </HeaderStart>

      <Tabs value={value} onChange={handleChange} aria-label='icon tabs'>
        <LinkTab icon={<HomeIcon />} to='/' />
        <LinkTab icon={<PeopleIcon />} to='/friends' />
        <LinkTab icon={<NotificationsActiveIcon />} to='/notifications' />
      </Tabs>

      <Avatar alt='Remy Sharp' src={avatar} />
    </StyledHeader>
  );
};

export default Nav;
