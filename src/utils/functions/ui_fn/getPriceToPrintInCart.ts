export const getPriceToPrintInCart = () => {
  const priceTagsDivs = document.querySelectorAll(`.cart-price`)

  let totalPrice = 0

  const priceToPrint = priceTagsDivs.forEach((item) => {
    const itemPrice = Number(item.querySelector(`.price-amount`)?.innerHTML.replace(`$`, ``))
    totalPrice += itemPrice
  })

  return totalPrice
}