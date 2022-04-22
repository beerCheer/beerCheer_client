import Link from 'next/link';
import { Article, Description, ImageWrapper, Name, Rate, RateContainer, RateLabel, Thumnail } from './styled';

interface BeerCardProps {
  name: string;
  rate: number;
  id: string;
}
const BeerCard = ({ name, rate, id }: BeerCardProps) => {
  return (
    <Link href={`/${id}`}>
      <Article>
        <ImageWrapper>
          <Thumnail src="https://picsum.photos/800/600" alt="" />
        </ImageWrapper>
        <Description>
          <Name>{name}</Name>
          <RateContainer>
            <RateLabel>🍻</RateLabel>
            <Rate>{rate}</Rate>
          </RateContainer>
        </Description>
      </Article>
    </Link>
  );
};

export default BeerCard;
