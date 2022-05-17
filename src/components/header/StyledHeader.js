import styled from 'styled-components';

const StyledHeader = styled.nav`
  background: ${(props) => props.theme.backgroundColor};
  border-bottom: 1px solid ${(props) => props.theme.fontColor};
  padding: 0.25rem 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr repeat(2, auto);
  align-items: center;
  column-gap: 1.5rem;
  line-height: 3rem;
  position: fixed;
  top: 0;
  box-sizing: border-box;
  z-index: 2;
  transition: background 0.2s ease;

  @media screen and (max-width: 480px) {
    padding: 0.25rem 1rem;
  }
`;

export default StyledHeader;

// Logo

const NavbarLogo = styled.a`
  color: ${(props) => props.theme.fontColor};
  font-family: 'Simplaform';
  font-size: 2.5rem;
  padding-top: 0.25rem;
  justify-self: start;

  img {

  }
`;

// Theme swtich

const NavbarSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 2.9rem;
  height: 1.5rem;
  cursor: pointer;

  input {
    width: 0;
    height: 0;
  }
`;

const Slider = styled.span`
  background: #192B61;
  border-radius: 0.75rem;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.4s;

  &:before {
    content: "";
    background: white;
    border-radius: 50%;
    position: absolute;
    height: 1.25rem;
    width: 1.25rem;
    left: 0.125rem;
    bottom: 0.125rem;
    transition: 0.4s;
    z-index: 1;
  }

  ${NavbarSwitch}:hover &:before{
    box-shadow: ${(props) => props.theme.textShadowColor} 0 0 8px;
  }

  input:checked + & {
    background: ${(props) => props.theme.primaryColor};
  }
  
  input:checked + &:before {
    transform: translateX(calc(2.9rem - 1.5rem));
  }
`;

const SwitchIcon = styled.div`
  height: 1.5rem;
  width: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;

  &.moon {
    left: 0.15rem;
  }

  &.sun {
    right: 0.15rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

// Burger

const NavbarBurger = styled.button`
  color: inherit;
  opacity: 0;
  justify-self: end;
  display: none;
  padding: 0;

  @media screen and (max-width: 768px) {
    opacity: 1;
    display: flex;
  }
`;

// Menu

const NavbarMenu = styled.div`
  justify-self: end;
  display: grid;
  grid-template-columns: repeat(3, auto);
  column-gap: 1.5rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: auto;
    grid-column: 1 / -1;
    justify-self: center;
    overflow: hidden;
    width: 100%;
  
    &.open {
      background: ${(props) => props.theme.backgroundColor};
      max-height: 15rem;
      visibility: visible;
      transition: max-height 0.25s ease-in;
      padding-bottom: 0.5rem;
    }
    
    &.close {
      max-height: 0;
      visibility: hidden;
      transition: max-height 0.15s ease-out;
    }
  }
`;

const NavbarLink = styled.a`
  font-size: 1.1rem;
  font-weight: 500;
  transition: 0.3s;
  position: relative;

  &:hover {
    color: ${(props) => props.theme.textShadowColor};
    text-shadow: ${(props) => props.theme.textShadowColor} 0 0 15px;
  }

  @media screen and (max-width: 768px) {
    grid-column: 1 / -1;
    text-align: center;
  }
`;

export { NavbarLogo, NavbarSwitch, Slider, SwitchIcon, NavbarBurger, NavbarMenu, NavbarLink };
