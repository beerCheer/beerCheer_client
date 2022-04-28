import { flatten } from 'lodash';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import { useBeer, useBeerComments } from '../../api/hook/beers';
import HomeLayout from '../../components/common/layout/layout';
import DetailComments from '../../components/detail/comments';
import { COMMENTS_PER_PAGE } from '../../constants';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
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
  const { data: commentsData, isLoading, fetchNextPage } = useBeerComments({ page, per_page: 10, beerId: Number(id) });
  const comments = useMemo(() => flatten(commentsData?.pages?.map(page => page.rows) ?? []), [commentsData]);
  const { data: beerData } = useBeer({ beerId: Number(id) });
  const beer = beerData?.beer;
  const rate = beerData?.rate;
  const { ref, visible } = useIntersectionObserver();

  useEffect(() => {
    console.log(visible);
    if (visible && !isLoading) {
      fetchNextPage();
      console.log('v');
    }
  }, [visible]);

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
      <DetailComments datas={comments} />
      <div ref={ref}>ff</div>
    </Section>
  );
};
export default Detail;

Detail.getLayout = function getLayout(page: React.ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
