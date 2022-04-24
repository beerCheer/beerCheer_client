import styled from '@emotion/styled';

import Button from '../../components/common/button';

export const SignupClearContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 20px 0px;
  padding: 16px;
  width: 100%;
`;

export const Text = styled.div`
  text-align: center;
  font-weight: ${props => props.theme['font-bold']};
  font-size: ${props => props.theme['font-xl']};

  ${props => props.theme.mq.tablet} {
    font-size: ${props => props.theme['font-lg']};
  }
  ${props => props.theme.mq.phone} {
    font-size: ${props => props.theme['font-md']};
  }
`;

export const RecommendButton = styled(Button)`
  display: flex;
  width: 150px;
  font-weight: ${props => props.theme['font-semibold']};
  color: white;
`;

export const RecommendText = styled.span`
  font-size: 14px;
  text-align: center;
  width: 100%;

  ${props => props.theme.mq.tablet} {
    font-size: ${props => props.theme['font-xs']};
  }
  ${props => props.theme.mq.phone} {
    font-size: ${props => props.theme['font-xs']};
  }
`;

export const SignupBeerImage = styled.img`
  display: flex;
  width: 100%;
  height: 400px;

  background-size: 100% 100%;
  ${props => props.theme.mq.tablet} {
    height: 300px;
  }
  ${props => props.theme.mq.phone} {
    height: 250px;
  }
`;
