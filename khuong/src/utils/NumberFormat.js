const formatToVnd = (price) => {
  price += ''
  return price.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
