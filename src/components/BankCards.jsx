import { bankCards } from "../utils/BankCardsUtils";
import BankCard from "./BankCard";

const BankCards = () => {
  return (
    //multiple bank cards to display on checkout i.e. cart page
    <div className="flex justify-center">
      {bankCards.map((src) => (
        <BankCard src={src} />
      ))}
    </div>
  );
};

export default BankCards;
