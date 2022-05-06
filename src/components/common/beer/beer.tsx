import HeartIcon from '../@Icons/heartIcon';
import { BeerThumnail, ImageWrapper } from '../../../styles/detail';
import { BeerContainer, Icon, BeerName, BeerScore, Description } from './styled';
import { useMutation } from 'react-query';
import { likeBeer } from '../../../api/fetcher/beers';
import theme from '../../../styles/theme';

const beer = '🍺';
interface BeerProps {
  id: number;
  name: string;
  rate?: number;
  imageUrl: string;
  favorite?: boolean;
  onClick?: () => void;
}

const Beer = ({ onClick, name, rate, imageUrl, id, favorite }: BeerProps) => {
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
        <HeartIcon width={40} height={35} fill={favorite ? theme.color.primary : undefined} />
      </Icon>
      <Description onClick={onClick}>
        <BeerName>{name}</BeerName>
        {!!rate && <BeerScore>{beer.repeat(rate)}</BeerScore>}
      </Description>
    </BeerContainer>
  );
};

export default Beer;
