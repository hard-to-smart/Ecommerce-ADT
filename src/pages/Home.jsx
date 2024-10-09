

import Banner from "../components/Banner";
import FeatureCardList from "../components/FeatureCardList";
import FeaturedProducts from "../components/FeaturedProducts";

const Home = () => {
  return (
    <div className="bg-black">
      <Banner />
      <FeatureCardList />
      <FeaturedProducts />
    </div>
  );
};


export default Home
