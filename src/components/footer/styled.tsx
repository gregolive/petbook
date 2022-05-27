import styled from 'styled-components';

const StyledFooter = styled.footer`
  color: ${(props) => props.theme.custom.font};
  background: ${(props) => props.theme.custom.header};
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  small {
    font-size: 1rem;
    font-weight: 300;
  }
`;

const FooterBtns = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a:nth-child(2) {
    color: ${(props) => props.theme.custom.font};
    display: flex;
    align-items: center;
  }
`;

const FooterLinks = styled.div`
  width: 80%;
  display: grid;
  gap: 0.2rem;

  a, button {
    font-size: 0.95rem;
    color: ${(props) => props.theme.custom.font};
    border-radius: 0.3rem;
    padding: 0.2rem 0.4rem;
    justify-self: start;
    transition: all 0.2s ease;
  }
  
  a:hover, button:hover {
    background: rgba(255, 255, 255, 0.6);
  }
`;

export { StyledFooter, FooterBtns, FooterLinks };
