import React from 'react';
import HomeLayout from '../components/common/layout/layout';

import { SignupClearContainer, SignupBeerImage, Text, RecommendButton, RecommendText } from '../styles/signupclear';

const Signupclear = () => {
  return (
    <SignupClearContainer>
      <Text>회원가입 완료!</Text>
      <RecommendButton primary size="small">
        <RecommendText>맥주추천 받으러 가기</RecommendText>
      </RecommendButton>
      <SignupBeerImage src={'/signupBeerIcon.svg'} />
    </SignupClearContainer>
  );
};

export default Signupclear;

Signupclear.getLayout = function getLayout(page: React.ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
