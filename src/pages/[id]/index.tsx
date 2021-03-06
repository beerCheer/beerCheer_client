import { useRouter } from 'next/router';
import React from 'react';
import { useBeer } from '../../api/hook/beers';
import HomeLayout from '../../components/common/layout/layout';
import DetailComments from '../../components/detail/comments';

import {
  BeerContainer,
  BeerInfoContainer,
  BeerInfoHeader,
  BeerName,
  BeerRate,
  BeerThumnail,
  DescriptionTitle,
  ImageWrapper,
  RateTitle,
  Section,
} from '../../styles/detail';
import Rating from '../../components/common/rating';
import { useRecoilValue } from 'recoil';
import { userIdState } from '../../recoils/atoms/users';
import { useMutation } from 'react-query';
import { createRate, updateRate } from '../../api/fetcher/beers';

const BEER_EMOJI = '🍺';
const Detail = () => {
  const router = useRouter();
  const { id: beerId } = router.query;
  const id = useRecoilValue(userIdState);
  const { data: beerData, refetch } = useBeer({ beerId: Number(beerId), id });
  const { mutateAsync: createRateMutaion } = useMutation(createRate);
  const { mutateAsync: updateRateMuation } = useMutation(updateRate);
  const beer = beerData?.beer;
  const avg = beer?.avg;
  const rate = beer?.rate ?? null;
  const handleRating = (newValue: number) => {
    if (rate) {
      updateRateMuation(
        {
          beerId: Number(beerId),
          rateData: {
            rate: newValue,
          },
        },
        {
          onSuccess: () => {
            refetch();
          },
        }
      );
    } else {
      createRateMutaion(
        {
          beerId: Number(beerId),
          rateData: {
            rate: newValue,
            malt: beer?.ingredients.malt[0].name,
            quantity: beer?.ingredients.malt[0].amount.value,
          },
        },
        {
          onSuccess: () => {
            refetch();
          },
        }
      );
    }
  };
  if (!beer) return null;

  return (
    <Section>
      <BeerContainer>
        <ImageWrapper>
          <BeerThumnail src={beer.image_url} alt="" />
        </ImageWrapper>

        <BeerInfoContainer>
          <BeerInfoHeader>
            <BeerName>{beer.name}</BeerName>
            <div>
              <BeerRate>{BEER_EMOJI.repeat(Number(avg) ?? 0)} </BeerRate>
              <BeerRate>{avg}</BeerRate>
            </div>
          </BeerInfoHeader>
          <DescriptionTitle>설명</DescriptionTitle>
          <p>{beer.description}</p>
          <div>
            <RateTitle>평가하기</RateTitle>
            <Rating value={rate} onChange={handleRating} />
          </div>
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
