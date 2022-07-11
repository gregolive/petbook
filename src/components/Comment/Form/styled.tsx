import styled from 'styled-components';

const StyledForm = styled.form`
  width: 100%;
`;

const InputRow = styled.div`
  position: relative;

  .MuiFormControl-root {
    width: 100%;
  }

  .MuiButtonBase-root {
    position: absolute;
    right: 0;
    top: 0;
  }

  textarea {
    width: calc(100% - 26px);
  }

  button {
    height: 100%;
    min-width: 30px;
    width: 40px;
  }
`;

export { StyledForm , InputRow};
