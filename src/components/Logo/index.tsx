import styled from 'styled-components';
import logo from '../../assets/img/logo.png';

const StyledLink = styled.a`
  display: flex;
  align-items: center;
`;

const StyledLogo = styled.img<{ size: string }>`
  height: ${(props) => props.size};
  width: ${(props) => props.size};
`;

interface LogoProps {
  link: string;
  size: string;
};

const LogoLink = ({ link, size } : LogoProps) => {
  return (
    <StyledLink href={link}>
      <StyledLogo src={logo} alt='petbook logo' size={size} />
    </StyledLink>
  );
};

export default LogoLink;
