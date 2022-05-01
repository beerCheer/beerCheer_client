import { useState } from 'react';
import { useUserQuery } from '../../api/hook/users';
import Button from '../../components/common/button';
import TextInput from '../../components/common/form/text-input';
import HomeLayout from '../../components/common/layout/layout';
import { ResignButtonContainer, Section, StyledForm, Title } from '../../styles/mypage/profile';
import { userIdState } from '../../recoils/atoms/users';
import { useRecoilValue } from 'recoil';
import { patchUserInfo, nicknameCheck } from '../../api/fetcher/users';
import NicknamePopup from '../../components/mypage/mypage-pop-up';
import { useMutation, useQueryClient } from 'react-query';

const Profile = () => {
  const [nickname, setNickname] = useState<string>('');
  const [error, setError] = useState<boolean>(true);
  const [nicknamePopupOpen, setNicknamePopupOpen] = useState<boolean>(false);

  const userId = useRecoilValue(userIdState);
  const queryClient = useQueryClient();

  const { data } = useUserQuery(userId as number, {
    onSuccess: data => {
      setNickname(data.nickname);
    },
  });

  const { mutate: patchUserInfoMutate } = useMutation(patchUserInfo, {
    onSuccess: () => {
      setError(() => true);
      setNicknamePopupOpen(() => true);
      queryClient.invalidateQueries([
        'USERS',
        {
          id: userId,
        },
      ]);
    },
  });

  const handleInfoSubmit = async () => {
    patchUserInfoMutate(nickname);
  };

  const validateUserNickname = (value: string) => {
    setNickname(value);
    if (!value) return;
    nicknameCheck(value).then(res => {
      res.message === '사용중인 닉네임' ? setError(true) : setError(false);
    });
  };

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
            handleOnChange={validateUserNickname}
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
