import AnimatedLogoIcon from '../../common/@Icons/animated-logo/animatedLogoIcon';
import KakaoIcon from '../../common/@Icons/kakaoIcon';
import NaverIcon from '../../common/@Icons/naverIcon';
import Button from '../../common/button';
import Modal, { ModalProps } from '../../common/modal';
import { ButtonContainer, ButtonText, ModalContent, ModalDescription } from './styled';

type LoginPopUpProps = Omit<ModalProps, 'children'>;
const LoginPopUp = ({ onClose, isOpen }: LoginPopUpProps) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen} close={true}>
      <ModalContent>
        <AnimatedLogoIcon />
        <ModalDescription>로그인하면 나의 취향에 맞는 맥주를 추천받을 수 있어요!</ModalDescription>

        <ButtonContainer>
          <Button primary color="#FEE500" block>
            <KakaoIcon fill="#000" />
            <ButtonText>카카오로 로그인하기</ButtonText>
          </Button>
          <Button primary color="#03c75a" block>
            <NaverIcon fill="#fff" /> <ButtonText>네이버로 로그인하기</ButtonText>
          </Button>
        </ButtonContainer>
      </ModalContent>
    </Modal>
  );
};

export default LoginPopUp;
