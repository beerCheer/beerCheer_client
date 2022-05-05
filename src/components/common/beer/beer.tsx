import HeartIcon from '../@Icons/heartIcon';
import { BeerThumnail, ImageWrapper } from '../../../styles/detail';
import { BeerContainer, Icon, BeerName, BeerScore, Description } from './styled';
import { useMutation } from 'react-query';
import { likeBeer } from '../../../api/fetcher/beers';

const beer = '🍺';

interface BeerProps {
  id: number;
  name: string;
  rate: number;
  imageUrl: string;
  onClick?: () => void;
}

const Beer = ({ onClick, name, rate, imageUrl, id }: BeerProps) => {
  const { mutateAsync } = useMutation(likeBeer);

  return (
    <BeerContainer>
      <ImageWrapper onClick={onClick}>
        <BeerThumnail src={imageUrl} />
      </ImageWrapper>
      <Icon
        onClick={() => {
          alert('좋아요');
          mutateAsync(id);
        }}
      >
        <HeartIcon width={40} height={35} />
      </Icon>
      <Description onClick={onClick}>
        <BeerName>{name}</BeerName>
        <BeerScore>{beer.repeat(rate)}</BeerScore>
      </Description>
    </BeerContainer>
  );
};

export default Beer;
