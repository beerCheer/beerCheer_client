import { FooterContainer, FooterContent, FooterTop, Text, FooterBottom, Creators, Creator } from './styled';
import LogoImageIcon from '../@Icons/logoImageIcon';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterTop>
          <LogoImageIcon width={25} height={25}></LogoImageIcon>
          <Text>beer, bewar</Text>
        </FooterTop>
        <FooterBottom>
          <Creators>
            <Creator href="https://github.com/sohhyeonkim">SOHHYEON KIM</Creator>
            <Creator href="https://github.com/borachoidev">BORA CHOI</Creator>
            <Creator href="https://github.com/moonseonyeong">SEONYEONG MOON</Creator>
          </Creators>
          <Text>Copyright Codeplay All rights reserved.</Text>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
