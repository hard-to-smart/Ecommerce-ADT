export const calculateDiscountedPrice = (originalPrice, discountPercentage) => {
  return ((originalPrice * (100 - discountPercentage)) / 100).toFixed(2);
};
