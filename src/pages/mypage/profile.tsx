import { useEffect, useState } from 'react';
import { useUser } from '../../api/hook/users';
import Button from '../../components/common/button';
import TextInput from '../../components/common/form/text-input';
import HomeLayout from '../../components/common/layout/layout';
import { ResignButtonContainer, Section, StyledForm, Title } from '../../styles/mypage/profile';
import { userIdState, userNicknameState } from '../../recoils/atoms/users';
import { useRecoilState, useRecoilValue } from 'recoil';
import { handleNicknameSubmit, nicknameCheck } from '../../api/fetcher/users';
import NicknamePopup from '../../components/mypage/mypage-pop-up';

const Profile = () => {
  const userId = useRecoilValue(userIdState);
  const [userNickname, setUserNickname] = useRecoilState(userNicknameState);
  const { data } = useUser(userId as number);
  const [nickname, setNickname] = useState<string>(userNickname);
  const [error, setError] = useState<boolean>(false);
  const [nicknamePopupOpen, setNicknamePopupOpen] = useState<boolean>(false);

  const handleInfoSubmit = () => {
    handleNicknameSubmit(nickname);
    setUserNickname(nickname);
    setError(() => true);
    setNicknamePopupOpen(() => true);
  };

  useEffect(() => {
    nicknameCheck(nickname as string).then(res => {
      res.message === '사용중인 닉네임' ? setError(true) : setError(false);
    });
  }, [nickname]);

  return (
    <Section>
      <Title>프로필 수정</Title>
      <section>
        <StyledForm
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <TextInput id="email" value={data?.email} label="이메일" disabled />
          <TextInput
            id="nickname"
            value={nickname}
            label="별명"
            handleOnChange={(value: string) => setNickname(() => value)}
            errorMessage={error && '이미 등록된 별명입니다'}
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

          <Button type="submit" primary block size="large" disabled={error} onClick={handleInfoSubmit}>
            저장하기
          </Button>
        </StyledForm>
      </section>
      <NicknamePopup onClose={() => setNicknamePopupOpen(false)} isOpen={nicknamePopupOpen} />
    </Section>
  );
};

export default Profile;

Profile.getLayout = function getLayout(page: React.ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
