import { useMemo, useState } from 'react';
import { USER_QUERY_KEY, useUserQuery } from '../../api/hook/users';
import Button from '../../components/common/button';
import TextInput from '../../components/common/form/text-input';
import HomeLayout from '../../components/common/layout/layout';
import WithdrawPopup from '../../components/mypage/mypage-pop-up/withdraw';
import { ResignButtonContainer, Section, StyledForm, Title } from '../../styles/mypage/profile';
import { userIdState } from '../../recoils/atoms/users';
import { useRecoilValue } from 'recoil';
import { patchUserInfo, nicknameCheck } from '../../api/fetcher/users';
import NicknamePopup from '../../components/mypage/mypage-pop-up';
import { useMutation, useQueryClient } from 'react-query';
import _ from 'lodash';

interface errorMesageType {
  unknown: string;
  isError: string;
  [prop: string]: string;
}

const Profile = () => {
  const [nickname, setNickname] = useState<string>('');
  const [error, setError] = useState<string | undefined>(' ');
  const [nicknamePopupOpen, setNicknamePopupOpen] = useState<boolean>(false);
  const [withdrawPopupOpen, setWithdrawPopupOpen] = useState<boolean>(false);

  const userId = useRecoilValue(userIdState);
  const queryClient = useQueryClient();

  const { data } = useUserQuery(userId as number, {
    onSuccess: data => {
      setNickname(data.nickname);
    },
  });

  const errorMessage: errorMesageType = {
    unknown: '닉네임을 입력해주세요',
    isError: '이미 등록된 별명입니다',
  };

  const { mutate: patchUserInfoMutate } = useMutation(patchUserInfo, {
    onSuccess: () => {
      setError(' ');
      setNicknamePopupOpen(true);
      queryClient.invalidateQueries([
        USER_QUERY_KEY.USERS,
        {
          id: userId,
        },
      ]);
    },
  });

  const handleInfoSubmit = () => {
    patchUserInfoMutate(nickname);
  };

  const validateUserNickname = useMemo(
    () =>
      _.debounce((value: string) => {
        nicknameCheck(value).then(res => {
          res.message !== '사용가능한 닉네임' ? setError(errorMessage.isError) : setError(undefined);
        });
      }, 50),
    [errorMessage.isError]
  );

  const handleOnChange = (value: string) => {
    setNickname(value);

    if (value.length === 0) {
      setError(errorMessage.unknown);
      return;
    }

    validateUserNickname(value);
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
          <TextInput id="nickname" value={nickname} label="별명" handleOnChange={handleOnChange} errorMessage={error} />
          <ResignButtonContainer>
            <Button size="small" onClick={() => setWithdrawPopupOpen(true)}>
              회원탈퇴
            </Button>
          </ResignButtonContainer>

          <Button type="submit" primary block size="large" disabled={!!error} onClick={handleInfoSubmit}>
            저장하기
          </Button>
        </StyledForm>
      </section>
      <NicknamePopup onClose={() => setNicknamePopupOpen(false)} isOpen={nicknamePopupOpen} />
      <WithdrawPopup onClose={() => setWithdrawPopupOpen(false)} isOpen={withdrawPopupOpen} />
    </Section>
  );
};

export default Profile;

Profile.getLayout = function getLayout(page: React.ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
