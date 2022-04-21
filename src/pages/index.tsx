import HomeLayout from '../components/common/layout/layout';
import Beer from '../components/common/beer/beer';
import Data from './dummy';

interface DummyProps {
  id: number;
  name: string;
  socre: number;
  imageUrl: string;
}

const Home = () => {
  return (
    <HomeLayout>
      {Data.map((item: DummyProps) => {
        return <Beer key={item.id} id={item.id} name={item.name} socre={item.socre} imageUrl={item.imageUrl} />;
      })}
    </HomeLayout>
  );
};

export default Home;
