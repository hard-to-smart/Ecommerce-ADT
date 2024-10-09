import { bankCards } from "../utils/BankCardsUtils";
import BankCard from "./BankCard";

const BankCards = () => {
  return (
    <div className="flex justify-center">
      {bankCards.map((src) => (
        <BankCard src={src} />
      ))}
    </div>
  );
};

export default BankCards;
