import styled from '@emotion/styled';

const Input = styled.input`
  background: #ffffff;
  border: 1px solid #ebebeb;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(218, 218, 218, 0.25);
  border-radius: 8px;
  padding: 17px 11px;
  font-weight: 500;
  max-width: 480px;
  width: 100%;

  &:placeholder {
    color: #bcae9e;

    font-size: 10px;
  }
  &:disabled {
    color: #bcae9e;
    background-color: #f1f0f0d7;
  }
`;

const Label = styled.label`
  display: block;
  font-weight: ${props => props.theme['font-semibold']};
  font-size: ${props => props.theme['font-sm']};
  color: #241b55;
  margin: 0 0 8px 8px;
`;

const ErrorMessage = styled.p`
  font-size: ${props => props.theme['font-xs']};
  margin: 8px;
  color: #ff9900;
`;

export { Input, Label, ErrorMessage };
