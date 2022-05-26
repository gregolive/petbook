import styled from 'styled-components';

const StyledLogo = styled.a`
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(#38B6FA, #0583C7);
  color: white;
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  text-align: center;
  justify-self: start;
  overflow: hidden;
`;

interface LogoProps {
  href: string;
};

const Logo = ({ href } : LogoProps) => {
  return (
    <StyledLogo href={href}>p</StyledLogo>
  );
};

export default Logo;
