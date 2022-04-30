import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import { KAKAO_REDIRECT_URL, KAKAO_REST_KEY, NAVER_CLIENT_ID, NAVER_REDIRECT_URL } from '../../../constants';
import { loginPopupState } from '../../../recoils/atoms/users';
import AnimatedLogoIcon from '../../common/@Icons/animated-logo/animatedLogoIcon';
import KakaoIcon from '../../common/@Icons/kakaoIcon';
import NaverIcon from '../../common/@Icons/naverIcon';
import Button from '../../common/button';
import Modal, { ModalProps } from '../../common/modal';
import { ButtonContainer, ButtonText, ModalContent, ModalDescription } from './styled';

type LoginPopUpProps = Omit<ModalProps, 'children'>;

const LoginPopUp = ({ onClose, isOpen }: LoginPopUpProps) => {
  const setLoginPopupOpen = useSetRecoilState(loginPopupState);
  const router = useRouter();
  const handleNaverLogin = () => {
    setLoginPopupOpen(false);

    const state = Math.random().toString(36).substring(2, 13);
    router.push(
      `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${state}&redirect_uri=${NAVER_REDIRECT_URL}`
    );
  };

  const handleKakaoLogin = () => {
    setLoginPopupOpen(false);
    router.push(
      `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_KEY}&redirect_uri=${KAKAO_REDIRECT_URL}&response_type=code`
    );
  };

  return (
    <Modal onClose={onClose} isOpen={isOpen} close={true}>
      <ModalContent>
        <AnimatedLogoIcon />
        <ModalDescription>로그인하면 나의 취향에 맞는 맥주를 추천받을 수 있어요!</ModalDescription>

        <ButtonContainer>
          <Button primary color="#FEE500" block onClick={handleKakaoLogin}>
            <KakaoIcon fill="#000" />
            <ButtonText>카카오로 로그인하기</ButtonText>
          </Button>
          <Button primary color="#03c75a" block onClick={handleNaverLogin} id="naver_id_login">
            <NaverIcon fill="#fff" /> <ButtonText>네이버로 로그인하기</ButtonText>
          </Button>
        </ButtonContainer>
      </ModalContent>
    </Modal>
  );
};

export default LoginPopUp;
