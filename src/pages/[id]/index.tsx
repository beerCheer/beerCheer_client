import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useBeer, useBeerComments } from '../../api/hook/beers';
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
  const { data: beer } = useBeer({ beerId: Number(id) });

  return (
    <Section>
      <BeerContainer>
        <ImageConatiner>
          <ImageWrapper>
            <BeerThumnail src={beer?.image_url} alt="" />
          </ImageWrapper>
        </ImageConatiner>
        <BeerInfoContainer>
          <BeerInfoHeader>
            <BeerName>{beer?.name}</BeerName>
            <div>
              <BeerRate>{BEER_EMOJI.repeat(beer?.avg ?? 0)} </BeerRate>
              <BeerRate>{beer?.avg}</BeerRate>
            </div>
          </BeerInfoHeader>
          <DescriptionTitle>설명</DescriptionTitle>
          <p>{beer?.description}</p>
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
