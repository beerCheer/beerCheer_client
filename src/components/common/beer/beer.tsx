import { BeerContainer, BeerImage, Icon, BeerName, BeerScore, BeerInfo } from './styled';

import HeartIcon from '../@Icons/heartIcon';
import Data from '../../../pages/dummy';

const beer = '🍺';

interface BeerProps {
  id: number;
  name: string;
  socre: number;
  imageUrl: string;
}

const Beer = (item: BeerProps) => {
  console.log(item);
  return (
    <BeerContainer>
      <BeerImage image={Data[0].imageUrl}>
        <Icon>
          <HeartIcon width={40} height={35} />
        </Icon>
      </BeerImage>
      <BeerInfo>
        <BeerName>Cass</BeerName>
        <BeerScore>{beer.repeat(Data[0].socre)}</BeerScore>
      </BeerInfo>
    </BeerContainer>
  );
};

export default Beer;
