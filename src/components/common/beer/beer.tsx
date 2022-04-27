import HeartIcon from '../@Icons/heartIcon';
import { BeerThumnail, ImageWrapper } from '../../../styles/detail';
import { BeerContainer, Icon, BeerName, BeerScore, Description } from './styled';

const beer = '🍺';

interface BeerProps {
  name: string;
  score: number;
  imageUrl: string;
  onClick?: () => void;
}

const Beer = ({ onClick, name, score, imageUrl }: BeerProps) => {
  return (
    <BeerContainer onClick={onClick}>
      <ImageWrapper>
        <BeerThumnail src={imageUrl} />
      </ImageWrapper>
      <Icon>
        <HeartIcon width={40} height={35} />
      </Icon>
      <Description>
        <BeerName>{name}</BeerName>
        <BeerScore>{beer.repeat(score)}</BeerScore>
      </Description>
    </BeerContainer>
  );
};

export default Beer;
