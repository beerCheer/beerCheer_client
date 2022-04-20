import styled from '@emotion/styled';

const mainColor = '#FF9900';

export const SearchBarContainer = styled.div`
  display: flex;
  height: 45px;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  justify-content: start;
  gap: 15px;
  width: 40%;
  padding: 5px 10px;
  border-radius: 10px;
`;

export const Input = styled.input`
  font-size: 24px;
  color: ${mainColor};
  width: 100%;
  border: none;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: ${mainColor};
  }
`;
