import { BeerContainer, BeerImage, Icon, BeerName, BeerScore, BeerInfo } from './styled';

import HeartIcon from '../@Icons/heartIcon';
import Link from 'next/link';
import { BeerThumnail, ImageWrapper } from '../../../styles/detail';

const beer = '🍺';

interface BeerProps {
  id: number;
  name: string;
  score: number;
  imageUrl: string;
}

const Beer = ({ id, name, score, imageUrl }: BeerProps) => {
  return (
    <Link href={`/${id}`}>
      <BeerContainer>
        <ImageWrapper>
          <BeerThumnail src={imageUrl} />
        </ImageWrapper>

        <Icon>
          <HeartIcon width={40} height={35} />
        </Icon>
        <BeerInfo>
          <BeerName>{name}</BeerName>
          <BeerScore>{beer.repeat(score)}</BeerScore>
        </BeerInfo>
      </BeerContainer>
    </Link>
  );
};

export default Beer;
