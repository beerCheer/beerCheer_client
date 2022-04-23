import React from 'react';
import HomeLayout from '../components/common/layout/layout';

import { SingupClearContainer, SignupBeerImage, Text, RecommendButton, RecommendText } from '../styles/signupclear';

const Signupclear = () => {
  return (
    <HomeLayout>
      <SingupClearContainer>
        <Text>회원가입 완료!</Text>
        <RecommendButton primary size="small">
          <RecommendText>맥주추천 받으러 가기</RecommendText>
        </RecommendButton>
        <SignupBeerImage src={'/signupBeerIcon.svg'} />
      </SingupClearContainer>
    </HomeLayout>
  );
};

export default Signupclear;
