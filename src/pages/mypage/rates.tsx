import { useState } from 'react';
import EmptyIcon from '../../components/common/@Icons/emptyIcon';
import HomeLayout from '../../components/common/layout/layout';
import BeerCard from '../../components/mypage/rates/beerCard';
import { CardContainer, EmptyFallback, Section, Title } from '../../styles/mypage/rates';

const dummyData = [
  { name: '맛있는 beer', rate: 4, imageUrl: 'https://picsum.photos/440/500' },
  { name: '정말 맛있는 맛있는 beer', rate: 5, imageUrl: 'https://picsum.photos/400/500' },
  { name: '진짜 beer', rate: 3, imageUrl: 'https://picsum.photos/500/750' },
  { name: '별로인 beer', rate: 2, imageUrl: 'https://picsum.photos/600/500' },
  { name: '맛없는 beer', rate: 1, imageUrl: 'https://picsum.photos/700/500' },
  { name: '그냥 beer', rate: 3, imageUrl: 'https://picsum.photos/500/550' },
  { name: 'Cass', rate: 4, imageUrl: 'https://picsum.photos/500/700' },
  { name: 'Terra', rate: 2, imageUrl: 'https://picsum.photos/700/400' },
  { name: 'Asahi', rate: 1, imageUrl: 'https://picsum.photos/750/500' },
  { name: 'Sapporo', rate: 5, imageUrl: 'https://picsum.photos/700/550' },
];

const Rates = () => {
  const [datas, setData] = useState(dummyData);
  return (
    <Section>
      <Title>내가 평가한 음료</Title>
      {datas.length === 0 ? (
        <EmptyFallback>
          <EmptyIcon width={150} height={150} />
          <p>아직 평가한 음료가 없어요!</p>
        </EmptyFallback>
      ) : (
        <CardContainer>
          {datas.map((data, i) => (
            <BeerCard key={i} id={i + ''} name={data.name} rate={data.rate} imageUrl={data.imageUrl} />
          ))}
        </CardContainer>
      )}
    </Section>
  );
};

export default Rates;

Rates.getLayout = function getLayout(page: React.ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
