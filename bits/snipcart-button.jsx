const SnipcartButton = ({id, price, url, desc, img, name, children}) => {
  return (
    <button className="snipcart-add-item"
      data-item-id={id}
      data-item-price={price}
      data-item-url={url}
      data-item-description={desc}
      data-item-image={img}
      data-item-name={name}
      data-item-weight='200'
      data-item-custom1-name="研磨度"
      data-item-custom1-options="不需要研磨|粗 (手沖)|中 (Aeropress)|幼 (Espresso)"
      data-item-custom1-value="不需要研磨"
      data-item-custom1-required="true"
      >
      {children}
    </button>
  );
}

export default SnipcartButton;