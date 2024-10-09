export const cardColors = ["#FF5733", "#E1809E", "#1CBA9E", "#9cf0e0"];

export const shuffleCardColors = () => {
  cardColors.sort(() => Math.random() - 0.5);
};
