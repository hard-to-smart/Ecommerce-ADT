

import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import FeatureCardList from "../components/FeatureCardList";
import FeaturedProducts from "../components/FeaturedProducts";
import { useEffect } from "react";
import { fetchProducts, selectError, selectIsLoading, selectProducts } from "../store/slices/productSlice";
import Loader from "../components/Loader/Loader";
import CurrencyDropdown from "../components/CurrencyDropdown";

const Home = () => {

  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(fetchProducts());
  },[])

  const isLoading=useSelector(selectIsLoading);
  const error=useSelector(selectError);
  const products=useSelector(selectProducts);
  

  if(isLoading) return <Loader/>

  if(error) return error

  return (
    <div className="bg-black relative">
      <CurrencyDropdown/>
      <Banner />
      <FeatureCardList />
      <FeaturedProducts products={products.slice(0,5)} />
    </div>
  );
};


export default Home
