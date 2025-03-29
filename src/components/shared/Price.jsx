const Price = ({ geoPrice }) => {
  return geoPrice != null ? (
    <h2 className="text-28px font-semibold text-white md:text-32px">
      {geoPrice.cost.replace(/\.00$/, '') > 0
        ? geoPrice.position == 1
          ? `${geoPrice.currency_symbol} ${geoPrice.cost.replace(/\.00$/, '')}`
          : `${geoPrice.cost.replace(/\.00$/, '')} ${geoPrice.currency_symbol} `
        : 'Free'}
    </h2>
  ) : (
    <div className="h-10 w-40 animate-pulse rounded-md bg-gray-500"></div>
  );
};

export default Price;
