import { flatten } from 'lodash';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo } from 'react';
import { useBeer, useBeerComments } from '../../api/hook/beers';
import HomeLayout from '../../components/common/layout/layout';
import DetailComments from '../../components/detail/comments';
import { useInView } from 'react-intersection-observer';
import {
  BeerContainer,
  BeerInfoContainer,
  BeerInfoHeader,
  BeerName,
  BeerRate,
  BeerThumnail,
  DescriptionTitle,
  ImageConatiner,
  ImageWrapper,
  Section,
} from '../../styles/detail';

const BEER_EMOJI = '🍺';
const Detail = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: beerData } = useBeer({ beerId: Number(id) });
  const beer = beerData?.beer;
  const rate = beerData?.rate;

  if (!beer) return null;
  return (
    <Section>
      <BeerContainer>
        <ImageConatiner>
          <ImageWrapper>
            <BeerThumnail src={beer.image_url} alt="" />
          </ImageWrapper>
        </ImageConatiner>
        <BeerInfoContainer>
          <BeerInfoHeader>
            <BeerName>{beer.name}</BeerName>
            <div>
              <BeerRate>{BEER_EMOJI.repeat(Number(rate) ?? 0)} </BeerRate>
              <BeerRate>{beer.avg}</BeerRate>
            </div>
          </BeerInfoHeader>
          <DescriptionTitle>설명</DescriptionTitle>
          <p>{beer.description}</p>
        </BeerInfoContainer>
      </BeerContainer>
      <DetailComments beerId={Number(id)} />
    </Section>
  );
};
export default Detail;

Detail.getLayout = function getLayout(page: React.ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
