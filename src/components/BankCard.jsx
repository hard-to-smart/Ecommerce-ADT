
const BankCard = ({src}) => {
  return (
    //individual bank card displayed on checkout i.e. cart page
    <div className="w-10  m-2 ">
        <img className="w-full h-[30px] object-contain" src={src}/>
    </div>
  )
}

export default BankCard
