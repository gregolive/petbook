import styled from 'styled-components';

const StyledHeader = styled.nav`
  background: ${(props) => props.theme.custom.highlight};
  height: 3.25rem;
  width: 100%;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  column-gap: 1.5rem;
  line-height: 3rem;
  box-sizing: border-box;
  transition: background 0.2s ease;

  .MuiButtonBase-root:not(.MuiIconButton-root) {
    min-height: 3.25rem;
    min-width: 0;
    max-width: none;
    width: calc(2rem + 4vw);
  }

  .MuiTabs-root {
    justify-self: center;
  }

  .MuiIconButton-root {
    justify-self: end;
    margin-left: 0;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr repeat(2, auto);
  }

  @media screen and (max-width: 480px) {
    padding: 0 1rem;
  }
`;

const HeaderStart = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

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
  background: ${(props) => props.theme.custom.font};
  border-radius: 0.75rem;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.2s;

  &:before {
    content: "";
    background: white;
    border-radius: 50%;
    position: absolute;
    height: 1.25rem;
    width: 1.25rem;
    left: 0.125rem;
    bottom: 0.125rem;
    transition: 0.2s;
    z-index: 1;
  }

  ${NavbarSwitch}:hover &:before{
    box-shadow: ${(props) => props.theme.palette.primary.main} 0 0 8px;
  }

  input:checked + & {
    background: ${(props) => props.theme.palette.primary.main};
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

export { StyledHeader, HeaderStart, NavbarSwitch, Slider, SwitchIcon };
