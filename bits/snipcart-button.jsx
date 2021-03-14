const SnipcartButton = ({pid, url, category, country, display_name, process, image, price_200g, price_500g, price_1kg, price_dripbag, price_gb, children}) => {
  console.log('item-price: ', price_200g);
  return (
    <button className="snipcart-add-item"
      data-item-id={pid}
      data-item-price={price_200g}
      data-item-url={url}
      data-item-description={category}
      data-item-image={image}
      data-item-name={`${country} ${display_name} ${process}`}
      data-item-weight='200'
      data-item-custom1-name="研磨度 Grind size"
      data-item-custom1-options="不需要研磨 (Whole beans)|粗 (Filter)|中 (Aeropress)|幼 (Espresso)"
      data-item-custom1-value="不需要研磨 (Whole beans)"
      data-item-custom1-required="true"
      data-item-custom2-name="包裝/種類 Package/Type"
      data-item-custom2-options={`200g|500g[+${price_500g-price_200g}]|1kg[+${price_1kg-price_200g}]|掛耳包 Drip Bag (研磨度不適用 Grind Size n/a)[+${price_dripbag-price_200g}]|生豆 Green Beans (研磨度不適用 Grind Size n/a)[+${price_gb-price_200g}]`}
      data-item-custom2-value="200g"
      data-item-custom2-required="true"
      >
      {children}
    </button>
  );
}

export default SnipcartButton;