import LogoTextIcon from '../logoTextIcon';
import SymbolIcon from '../symbolIcon';
import { AnimatedLogo, AnimatedSymbol } from './styled';

interface AnimatedLogoIcon {
  textWidth?: number;
  textHeight?: number;
  symbolWidth?: number;
  symbolHeight?: number;
  onClick?: () => void;
}
const AnimatedLogoIcon = ({
  textWidth = 107,
  textHeight = 29,
  symbolWidth = 50,
  symbolHeight = 50,
  onClick,
}: AnimatedLogoIcon) => {
  return (
    <AnimatedLogo onClick={onClick}>
      <LogoTextIcon width={textWidth} height={textHeight} />
      <AnimatedSymbol>
        <SymbolIcon width={symbolWidth} height={symbolHeight} />
      </AnimatedSymbol>
    </AnimatedLogo>
  );
};

export default AnimatedLogoIcon;
