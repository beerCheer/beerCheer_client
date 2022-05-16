import HeartIcon from '../@Icons/heartIcon';
import {
  BeerContainer,
  Icon,
  BeerName,
  BeerScore,
  Description,
  BeerThumnail,
  ImageWrapper,
  ImageContainer,
} from './styled';
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

const Beer = ({ onClick, name, rate, imageUrl, id, favorite, heart = true }: BeerProps) => {
  const isLogin = useRecoilValue(loginState);
  const { mutateAsync: likeBeerMutate } = useMutation(likeBeer);
  const { mutateAsync: cancelLikeMuatate } = useMutation(cancelLike);
  const queryClient = useQueryClient();
  const handleOnClickLike = (id: number) => {
    if (!isLogin) return;

    if (favorite) {
      cancelLikeMuatate(id, {
        onSuccess: () => {
          queryClient.invalidateQueries(BEER_QUERY_KEY.BEERS);
        },
      });
    } else {
      likeBeerMutate(id, {
        onSuccess: () => {
          queryClient.invalidateQueries(BEER_QUERY_KEY.BEERS);
        },
      });
    }
  };

  return (
    <BeerContainer>
      <ImageContainer>
        <ImageWrapper onClick={onClick}>
          <BeerThumnail src={imageUrl} />
          {!!rate && <BeerScore>🍺 {rate}</BeerScore>}
        </ImageWrapper>
        {heart && (
          <Icon onClick={() => handleOnClickLike(id)}>
            <HeartIcon width={40} height={35} fill={favorite ? `${theme.color.tertiary}90` : undefined} />
          </Icon>
        )}
      </ImageContainer>
      <Description onClick={onClick}>
        <BeerName>{name}</BeerName>
      </Description>
    </BeerContainer>
  );
};

export default Beer;
