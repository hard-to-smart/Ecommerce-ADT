import { shuffleCardColors } from "../utils/colorUtils";
import { cardData } from "../utils/constants";
import FeatureCard from "./FeatureCard";

const FeatureCardList = () => {
  shuffleCardColors();
  return (
    <div className="flex justify-center pb-7 pt-16">
      {cardData.map((info, index) => (
        <FeatureCard key={index} info={info} ind={index} />
      ))}
    </div>
  );
};

export default FeatureCardList;
