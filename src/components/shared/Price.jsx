const Price = ({ geoPrice }) => {
  return geoPrice != null ? (
    <h2 className={`font-semibold text-black`}>
      {Number(geoPrice?.cost) > 0
        ? geoPrice?.position == 1
          ? `${geoPrice?.currency_symbol}${String(geoPrice?.cost).replace(/\.00$/, '')}`
          : `${String(geoPrice?.cost).replace(/\.00$/, '')} ${geoPrice.currency_symbol}`
        : 'Free'}
    </h2>
  ) : (
    <div className="h-10 w-40 animate-pulse rounded-md bg-gray-500"></div>
  );
};

export default Price;