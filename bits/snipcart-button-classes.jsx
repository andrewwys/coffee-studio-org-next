const SnipcartButtonClasses = ({pid, url, display_name, description, price, children}) => {
  return (
    <button className="snipcart-add-item"
      data-item-id={pid}
      data-item-price={price}
      data-item-url={url}
      data-item-description={description}
      data-item-image={'/images/coffee-class-pourover.png'}
      data-item-name={display_name}
      data-item-weight='0'
    >
      {children}
      <style jsx>{`
        .snipcart-add-item {
          background: transparent;
          border: 0;
        }
        `}</style>
    </button>
  );
}

export default SnipcartButtonClasses;