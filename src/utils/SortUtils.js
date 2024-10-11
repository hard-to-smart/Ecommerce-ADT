//  function to sort products by rating

export const sortByRating = (products, value) => {
  const filteredVal =  products.filter((product) => product.rating >= Number(value));
  return filteredVal.sort((a, b) => b.rating - a.rating);
};

// function to filter product by min and max value
export const sortByPrice = (products, min, max)=>{
   return products.filter((product) => product.price >= min && product.price<= max);
}

