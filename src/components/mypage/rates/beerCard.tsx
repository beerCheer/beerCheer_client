import Link from 'next/link';
import { Article, Description, ImageWrapper, Name, Rate, RateContainer, RateLabel, Thumnail } from './styled';

interface BeerCardProps {
  name: string;
  rate: number;
  id: string;
  imageUrl: string;
}
const BeerCard = ({ name, imageUrl, rate, id }: BeerCardProps) => {
  return (
    <Link href={`/${id}`}>
      <a>
        <Article>
          <ImageWrapper>
            <Thumnail src={imageUrl} alt={name} />
          </ImageWrapper>
          <Description>
            <Name>{name}</Name>
            <RateContainer>
              <RateLabel>내 평가🍻</RateLabel>
              <Rate>{rate}</Rate>
            </RateContainer>
          </Description>
        </Article>
      </a>
    </Link>
  );
};

export default BeerCard;
