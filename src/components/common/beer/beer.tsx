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
  const { pathname } = useRouter();
  const [selectedBeers, setSelectedBeers] = useRecoilState(selectedBeersState);

  const handleSelectBeers = (id: string) => {
    const selected: boolean = selectedBeers.includes(id);

    if (selected) {
      const unCheck = selectedBeers.filter(el => el !== id);
      setSelectedBeers(() => unCheck);
    } else {
      if (selectedBeers.length < 3) {
        setSelectedBeers(prev => [...prev, id]);
      }
    }
  };

  return (
    <BeerContainer
      pathname={pathname}
      seleteBeer={selectedBeers.includes(String(id))}
      onClick={() => handleSelectBeers(String(id))}
    >
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
