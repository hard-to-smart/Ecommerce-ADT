import ProductCard from "./ProductCard";

const FeaturedProducts = ({products}) => {
  return (
    <div className="w-full bg-black">
      <p className="text-center pt-10 pb-5 text-3xl text-white font-semibold tracking-widest">
        Elevate your style with our curated collection
      </p>
      <div className="w-full flex justify-center mt-10 gap-5">
        {
          products.map((product)=><ProductCard key={product?.id} product={product}/>)
        }
      </div>
    </div>
  );
};

export default FeaturedProducts;
