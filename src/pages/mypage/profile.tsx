import { useRouter } from 'next/router';
import { useQueryClient } from 'react-query';
import { useResetRecoilState } from 'recoil';
import { withdraw } from '../../api/fetcher/users';
import { USER_QUERY_KEY } from '../../api/hook/users';
import Button from '../../components/common/button';
import TextInput from '../../components/common/form/text-input';
import HomeLayout from '../../components/common/layout/layout';
import {
  userIdState,
  // userNicknameState  /* 머지 완료시 에러 사라짐 */
} from '../../recoils/atoms/users';
import { ResignButtonContainer, Section, StyledForm, Title } from '../../styles/mypage/profile';

const Profile = () => {
  const queryClient = useQueryClient();
  const resetUserId = useResetRecoilState(userIdState);
  // const resetUserNickname = useResetRecoilState(userNicknameState); /* 머지 완료시 에러 사라짐 */
  const router = useRouter();

  const handleWithdraw = async () => {
    async function withdrawUser() {
      try {
        await withdraw();
        resetUserId();
        // resetUserNickname(); /* 머지 완료시 에러 사라짐 */
        queryClient.removeQueries(USER_QUERY_KEY.USERS);
      } catch (error) {
        console.log(error); // TODO : error페이지 이동
      }
      router.replace('/');
    }

    withdrawUser();
  };

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
          <TextInput id="email" label="이메일" disabled />
          <TextInput id="nickname" label="별명" handleOnChange={() => {}} errorMessage={'이미 등록된 별명입니다'} />
          <ResignButtonContainer>
            <Button size="small" onClick={handleWithdraw}>
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
