import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useBeerComments } from '../../api/hook/beers';
import { IBeers } from '../../api/types/beers';
import HomeLayout from '../../components/common/layout/layout';
import DetailComments from '../../components/detail/comments';
import { COMMENTS_PER_PAGE } from '../../constants';
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
  const [page, setPage] = useState(1);
  const router = useRouter();
  const { id } = router.query;
  const { data: commentsData } = useBeerComments({ page, per_page: COMMENTS_PER_PAGE, beerId: Number(id) });
  const comments = commentsData?.rows ?? [];
  const beer = {
    name: 'Buzz',
    description: 'A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.',
    avg: 2.7,
    image_url: 'https://images.punkapi.com/v2/keg.png',
  };

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
              <BeerRate>{BEER_EMOJI.repeat(beer.avg)} </BeerRate>
              <BeerRate>{beer.avg}</BeerRate>
            </div>
          </BeerInfoHeader>
          <DescriptionTitle>설명</DescriptionTitle>
          <p>{beer.description}</p>
        </BeerInfoContainer>
      </BeerContainer>
      <DetailComments datas={comments} />
    </Section>
  );
};
export default Detail;

Detail.getLayout = function getLayout(page: React.ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
