import { BeerContainer, BeerImage, Icon, BeerName, BeerScore, BeerInfo } from './styled';

import HeartIcon from '../@Icons/heartIcon';

const beer = '🍺';

interface BeerProps {
  id: number;
  name: string;
  socre: number;
  imageUrl: string;
}

const Beer = ({ id, name, socre, imageUrl }: BeerProps) => {
  return (
    <BeerContainer>
      <BeerImage image={imageUrl}>
        <Icon>
          <HeartIcon width={40} height={35} />
        </Icon>
      </BeerImage>
      <BeerInfo>
        <BeerName>{name}</BeerName>
        <BeerScore>{beer.repeat(socre)}</BeerScore>
      </BeerInfo>
    </BeerContainer>
  );
};

export default Beer;
