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
      <Beer></Beer>
    </HomeLayout>
  );
};

export default Home;
