import './PriceText.scss'

const PriceText = ({ value, currency='$', background=false, light=false, extraClass }: { value: number | string | undefined, currency?: string, background?: boolean, light?:boolean, extraClass?:string}) => {
  
  if(!light){
    return (
    <>
      <div className={`price-text ${background === true && 'price-text-background'} ${extraClass}`}>
        <p className="price-amount">{currency}{Number(value).toFixed(2)}</p>
      </div>
    </>
  )
} else {
  return (
    <>
      <div className={`price-text-light ${extraClass}`}>
        <p className="price-amount">{currency}{Number(value).toFixed(2)}</p>
      </div>
    </>
  )
}
}

export default PriceText