import styled from 'styled-components';

const StyledForm = styled.form`
  width: 100%;
`;

const InputRow = styled.div`
  padding: 12px 8px 8px;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  position: relative;

  .MuiFormControl-root {
    width: 100%;
  }

  .MuiButtonBase-root {
    position: absolute;
    right: 0;
    top: 0;
  }

  .MuiOutlinedInput-root {
    border-radius: 20px;
    background: ${(props) => props.theme.custom.commentField};
  }

  textarea {
    width: calc(100% - 26px);
    border: none;
  }

  .MuiOutlinedInput-notchedOutline:not(:focus) {
    border: none;
  }

  button {
    height: 100%;
    min-width: 30px;
    width: 40px;
    margin-right: 8px;
  }
`;

export { StyledForm , InputRow};
