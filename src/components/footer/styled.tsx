import styled from 'styled-components';

const StyledFooter = styled.footer`
  color: ${(props) => props.theme.custom.font};
  background: ${(props) => props.theme.custom.background};
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  small {
    font-size: 1rem;
    font-weight: 200;
  }
`;

const FooterBtns = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a:first-child {
    height: 30px;
    width: auto;
  }
  
  a:nth-child(2) {
    color: ${(props) => props.theme.custom.font};
  }
`;

const FooterLinks = styled.div`
  font-size: 0.95rem;
  width: 80%;
  display: grid;
  gap: 0.2rem;

  a {
    color: ${(props) => props.theme.custom.font};
    border-radius: 0.3rem;
    padding: 0.2rem 0.4rem;
    justify-self: start;
    transition: all 0.2s ease;
  }
  
  a:hover {
    background: rgba(255, 255, 255, 0.15)
  }
`;

export { StyledFooter, FooterBtns, FooterLinks };
