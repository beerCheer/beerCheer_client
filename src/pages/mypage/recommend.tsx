import React, { useEffect, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { useRouter } from 'next/router';

import { useRecommendationsQuery } from '../../api/hook/beers';
import { IBeer } from '../../api/types/beers';
import { userIdState } from '../../recoils/atoms/users';
import { useUserQuery } from '../../api/hook/users';

import HomeLayout from '../../components/common/layout/layout';
import Beer from '../../components/common/beer/beer';
import { Title, Section, CardContainer } from '../../styles/preferences';
import { EmptyFallback } from '../../styles/mypage/rates';
import EmptyIcon from '../../components/common/@Icons/emptyIcon';

const Recommend = () => {
  const router = useRouter();
  const userId = useRecoilValue(userIdState);
  const { data: user, isFetched } = useUserQuery(userId as number);
  const isPreferenceOrRateChecked = useMemo(() => user && user.isPreferenceOrRateChecked, [user]);
  useEffect(() => {
    if (isFetched && !isPreferenceOrRateChecked) {
      router.push('/preferences');
    }
  }, [user]);

  const { data } = useRecommendationsQuery({ enable: isPreferenceOrRateChecked });
  const recommendBeers = data ?? [];

  return (
    <Section>
      <Title>추천 맥주</Title>
      {!recommendBeers.length ? (
        <EmptyFallback>
          <EmptyIcon width={150} height={150} />
          <p>추천맥주가 없어요</p>
        </EmptyFallback>
      ) : (
        <CardContainer recommend>
          {recommendBeers.map((item: IBeer) => {
            return (
              <Beer
                id={item.id}
                key={item.id}
                name={item.name}
                rate={item.avg}
                imageUrl={item.image_url}
                favorite={item.favorite}
                onClick={() => router.push(`/${item.id}`)}
              />
            );
          })}
        </CardContainer>
      )}
    </Section>
  );
};

export default Recommend;
Recommend.getLayout = function getLayout(page: React.ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
