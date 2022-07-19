import styled from 'styled-components';
import Card from '@mui/material/Card';

const StyledCard = styled(Card)`
  box-shadow: 0px 5px 5px -3px ${(props) => props.theme.custom.shadow},
              0px 8px 10px 2px ${(props) => props.theme.custom.shadow},
              0px 1px 3px 0px ${(props) => props.theme.custom.shadow} !important;
  display: grid;

  .MuiCardMedia-root {
    justify-self: center;
    width: 80%;
  }
`;

const CardButton = styled.button`
  color: ${(props) => props.theme.custom.font};
  font-size: 13px;

  &:hover {
    text-decoration: underline;
  } 
`;

export { StyledCard, CardButton };
