import { useState } from 'react';
import Button from '../../components/common/button';
import TextInput from '../../components/common/form/text-input';
import HomeLayout from '../../components/common/layout/layout';
import { ResignButtonContainer, Section, StyledForm, Title } from '../../styles/mypage/profile';

const Profile = () => {
  const [user, setUser] = useState({
    id: '1',
    email: 'user@email.com',
    nickname: '기존닉네임',
  });

  return (
    <Section>
      <Title>프로필 수정</Title>

      <section>
        <StyledForm
          onSubmit={e => {
            e.preventDefault();
            alert('닉네임변경');
          }}
        >
          <TextInput id="email" value={user?.email} label="이메일" disabled />
          <TextInput
            id="nickname"
            value={user?.nickname}
            label="별명"
            handleOnChange={() => {}}
            errorMessage={'이미 등록된 별명입니다'}
          />
          <ResignButtonContainer>
            <Button
              size="small"
              onClick={() => {
                alert('회원탈퇴');
              }}
            >
              회원탈퇴
            </Button>
          </ResignButtonContainer>

          <Button type="submit" primary block size="large">
            저장하기
          </Button>
        </StyledForm>
      </section>
    </Section>
  );
};

export default Profile;

Profile.getLayout = function getLayout(page: React.ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
