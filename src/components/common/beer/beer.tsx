import HeartIcon from '../@Icons/heartIcon';
import { BeerThumnail, ImageWrapper } from '../../../styles/detail';
import { BeerContainer, Icon, BeerName, BeerScore, Description } from './styled';
import { useMutation, useQueryClient } from 'react-query';
import { cancelLike, likeBeer } from '../../../api/fetcher/beers';
import theme from '../../../styles/theme';
import { BEER_QUERY_KEY } from '../../../api/hook/beers';
import { useRecoilValue } from 'recoil';
import { loginState } from '../../../recoils/selector/users';

const beer = '🍺';
interface BeerProps {
  id: number;
  name: string;
  rate?: number;
  imageUrl: string;
  favorite?: boolean;
  heart?: boolean;
  onClick?: () => void;
}

const Beer = ({ onClick, name, rate, imageUrl, id, favorite, heart }: BeerProps) => {
  const isLogin = useRecoilValue(loginState);
  const { mutateAsync: likeBeerMutate } = useMutation(likeBeer);
  const { mutateAsync: cancelLikeMuatate } = useMutation(cancelLike);
  const queryClient = useQueryClient();
  const handleOnClickLike = (id: number) => {
    if (!isLogin) return;

    if (favorite) {
      cancelLikeMuatate(id);
    } else {
      likeBeerMutate(id);
    }

    queryClient.invalidateQueries(BEER_QUERY_KEY.BEERS);
  };

  return (
    <BeerContainer>
      <ImageWrapper onClick={onClick}>
        <BeerThumnail src={imageUrl} />
      </ImageWrapper>
      {heart && (
        <Icon onClick={() => handleOnClickLike(id)}>
          <HeartIcon width={40} height={35} fill={favorite ? theme.color.primary : undefined} />
        </Icon>
      )}
      <Description onClick={onClick}>
        <BeerName>{name}</BeerName>
        {!!rate && <BeerScore>{beer.repeat(rate)}</BeerScore>}
      </Description>
    </BeerContainer>
  );
};

export default Beer;
