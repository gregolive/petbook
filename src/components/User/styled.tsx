import styled from 'styled-components';

const StyledForm = styled.form`
  width: 100%;

  .MuiFormControl-root {  
    display: grid;
    gap: 1rem;
  }

  .MuiTextField-root {
    gap: 0;
  }

  button:first-of-type {
    color: ${(props) => props.theme.custom.background};
  }

  .MuiFormHelperText-root {
    margin: 3px 0 0;
  }
`;

const FormHeading = styled.h3`
  font-size: 2.25rem;
  font-weight: 500;
`;

const FormText = styled.p`
  margin: 0.5rem 0 0;
  align-self: start;
  display: flex;
  align-items: center;
`;

export { StyledForm, FormHeading, FormText };
