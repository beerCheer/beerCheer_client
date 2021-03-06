import styled from '@emotion/styled';

const mainColor = '#FF9900';

interface SearchBarContainerProps {
  main?: string;
}

export const SearchBarContainer = styled.div<SearchBarContainerProps>`
  display: flex;
  height: 45px;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  justify-content: start;
  width: 40%;
  padding: 5px 10px;
  border-radius: 8px;

  ${props =>
    props.main === '/' &&
    `
    position: absolute;
  top: 40%;
  left: 30%;
  background-color: rgba(255, 255, 255, 0.8);
 `};
`;
export const Input = styled.input`
  font-size: ${props => props.theme['font-md']};
  color: ${props => props.theme.color.primary};
  width: 100%;
  border: none;
  background: none;
  padding-left: 8px;

  :focus {
    outline: none;
  }

  ::placeholder {
  }
`;
