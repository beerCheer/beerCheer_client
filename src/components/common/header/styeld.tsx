import styled from '@emotion/styled';

const mainColor = '#FF9900';

export const Container = styled.div<{ shadow: string }>`
  display: flex;
  position: sticky;
  height: 75px;
  align-items: center;
  justify-content: space-between;
  ${props => (props.shadow ? 'box-shadow: 0px 2px 32px -5px #0000001A' : '')};
`;

export const Title = styled.div`
  font-size: 32px;
  color: ${mainColor};
`;

export const Text = styled.div`
  font-size: 24px;
  color: #080575;
`;

export const SigninText = styled.div`
  font-size: 16px;
  color: #ff9900;
`;
