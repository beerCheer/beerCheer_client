import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { selectedBeersState } from '../../../states';

import HeartIcon from '../@Icons/heartIcon';
import { BeerContainer, Thumnail, Icon, BeerName, BeerScore, Description } from './styled';

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
      <Thumnail src={imageUrl}></Thumnail>
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
