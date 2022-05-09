import { useUserRates } from '../../api/hook/mypage';
import { IBeer } from '../../api/types/beers';

import EmptyIcon from '../../components/common/@Icons/emptyIcon';
import HomeLayout from '../../components/common/layout/layout';
import LoginRoute from '../../components/common/routes/login';
import BeerCard from '../../components/mypage/rates/beerCard';
import { CardContainer, EmptyFallback, Section, Title } from '../../styles/mypage/rates';

const Rates = () => {
  const { data: ratesBeerData } = useUserRates();

  return (
    <Section>
      <Title>내가 평가한 음료</Title>
      {ratesBeerData?.message ? (
        <EmptyFallback>
          <EmptyIcon width={150} height={150} />
          <p>아직 평가한 음료가 없어요!</p>
        </EmptyFallback>
      ) : (
        <CardContainer>
          {ratesBeerData?.result?.map((data: IBeer) => (
            <BeerCard key={data.id} id={data.id} name={data.name} rate={data.avg} imageUrl={data.image_url} />
          ))}
        </CardContainer>
      )}
    </Section>
  );
};

export default Rates;

Rates.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <HomeLayout>
      <LoginRoute>{page}</LoginRoute>
    </HomeLayout>
  );
};
