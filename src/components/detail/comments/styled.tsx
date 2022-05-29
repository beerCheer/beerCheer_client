import styled from '@emotion/styled';

const Title = styled.h3`
  font-weight: ${props => props.theme['font-bold']};
  font-size: ${props => props.theme['font-2xl']};
`;

const Header = styled.header`
  width: 100%;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.color.option}50;
`;

const InputWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

const CommentInput = styled.input`
  flex: 1;
  padding: 8px 0;
  border: none;
  font-size: ${props => props.theme['font-md']};
  &:focus {
    outline: none;
  }
`;

const CommentContainer = styled.section`
  padding: 0 24px;
`;

export { CommentInput, InputWrapper, Header, Title, CommentContainer };
