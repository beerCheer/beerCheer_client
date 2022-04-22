import { useState } from 'react';
import EmptyIcon from '../../components/common/@Icons/emptyIcon';
import HomeLayout from '../../components/common/layout/layout';
import BeerCard from '../../components/mypage/rates/beerCard';
import { CardContainer, EmptyFallback, Section, Title } from '../../styles/mypage/rates';

const dummyData = [
  { name: 'beer', rate: 1 },
  { name: 'beer', rate: 1 },
  { name: 'beer', rate: 1 },
  { name: 'beer', rate: 1 },
  { name: 'beer', rate: 1 },
  { name: 'beer', rate: 1 },
  { name: 'beer', rate: 1 },
  { name: 'beer', rate: 1 },
  { name: 'beer', rate: 1 },
  { name: 'beer', rate: 1 },
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
            <BeerCard key={i} id={i + ''} name={data.name} rate={data.rate} />
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
