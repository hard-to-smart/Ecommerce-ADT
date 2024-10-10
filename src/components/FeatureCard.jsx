import { cardColors } from "../utils/colorUtils";

const FeatureCard = ({ info, ind }) => {
  return (
    // feature card below banner
    <div
      className="w-60 h-48  m-2 flex justify-center items-center transition-all duration-200 ease-in-out hover:scale-105 hover:rotate-2  hover:shadow-lg cursor-default"
      style={{ backgroundColor: cardColors[ind] }}
    >
      <p className="text-black p-6 text-2xl font-bold tracking-wider text-center">
        {info}
      </p>
    </div>
  );
};

export default FeatureCard;
