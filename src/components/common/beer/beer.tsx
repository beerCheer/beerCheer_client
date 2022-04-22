import { BeerContainer, BeerImage, Icon, BeerName, BeerScore, BeerInfo } from './styled';

import HeartIcon from '../@Icons/heartIcon';

const beer = '🍺';

interface BeerProps {
  id: number;
  name: string;
  score: number;
  imageUrl: string;
}

const Beer = ({ id, name, score, imageUrl }: BeerProps) => {
  return (
    <BeerContainer>
      <BeerImage src={imageUrl}></BeerImage>
      <HeartIcon width={40} height={35} />
      <BeerInfo>
        <BeerName>{name}</BeerName>
        <BeerScore>{beer.repeat(score)}</BeerScore>
      </BeerInfo>
    </BeerContainer>
  );
};

export default Beer;
