import Modal, { ModalProps } from '../../../common/modal';
import TwoBeerIcon from '../../../common/@Icons/twobeerIcon';
import { ModalContent, Title, ButtonText } from './styled';
import { useRouter } from 'next/router';
import { useQueryClient } from 'react-query';
import { useResetRecoilState } from 'recoil';
import { userIdState } from '../../../../recoils/atoms/users';
import { withdraw } from '../../../../api/fetcher/users';
import { USER_QUERY_KEY } from '../../../../api/hook/users';
import Button from '../../../common/button';

type WithdrawPopupProps = Omit<ModalProps, 'children'>;

const WithdrawPopup = ({ onClose, isOpen }: WithdrawPopupProps) => {
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
        // TODO : error페이지 이동
      }
      router.replace('/');
    }

    withdrawUser();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <Title>정말로 탈퇴하시겠습니까 ?</Title>
        <Button onClick={handleWithdraw}>
          <ButtonText>
            <TwoBeerIcon />
            <br />
            탈퇴하기
          </ButtonText>
        </Button>
      </ModalContent>
    </Modal>
  );
};

export default WithdrawPopup;
