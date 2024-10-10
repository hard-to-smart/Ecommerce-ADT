export const  convertCurrency=(audAmount, targetCurrency, rates)=>{
    const AUDtoUSD = rates['AUD']; 
    const USDToTargetCurrency = rates[!targetCurrency ? "AUD" :targetCurrency]; 
    const usdAmount = audAmount * (1 / AUDtoUSD);
    const targetCurrencyAmount = usdAmount * USDToTargetCurrency;
    return targetCurrencyAmount.toFixed(2);
  }