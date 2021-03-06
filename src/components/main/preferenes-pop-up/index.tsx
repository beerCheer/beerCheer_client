import React from 'react';

import Modal, { ModalProps } from '../../common/modal';
import OneBeerIcon from '../../common/@Icons/onebeerIcon';
import TwoBeerIcon from '../../common/@Icons/twobeerIcon';
import { ModalContent, Title, ButtonBox, ButtonContainer, Icon } from './styled';
import { useRouter } from 'next/router';

type PreferenesModalProps = Omit<ModalProps, 'children'>;

const PreferenesModal = ({ isOpen, onClose }: PreferenesModalProps) => {
  const router = useRouter();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <Title>아직 좋아하는 맥주를 고르지 않았어요 !</Title>
        <ButtonBox>
          <ButtonContainer onClick={() => router.push('/preferences')}>
            좋아하는 맥주 <br />
            고르러가기
            <Icon>
              <OneBeerIcon />
            </Icon>
          </ButtonContainer>
          <ButtonContainer onClick={() => router.push('/list')}>
            맥주 전체리스트 <br />
            보러가기
            <Icon>
              <TwoBeerIcon />
            </Icon>
          </ButtonContainer>
        </ButtonBox>
      </ModalContent>
    </Modal>
  );
};

export default PreferenesModal;
