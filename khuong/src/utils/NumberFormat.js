export const formatToVnd = (price, currency = '') => {
  price += ''
  return price.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' ' + currency;
}
