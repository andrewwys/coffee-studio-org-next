import { packageOptions } from '../siteConfig.json'
import { useAppContext } from '../src/context/state'


const SnipcartButton = ({pid, url, category, country, display_name, process, image, price_200g, price_500g, price_1kg, price_dripbag, price_gb, children, defaultPackageOpt}) => {
  const {lang} = useAppContext();
  const { PO_200g, PO_500g, PO_1kg, PO_dripbag, PO_gb } = packageOptions[lang];
  const str500g = price_500g ? `|${PO_500g}[+${price_500g-price_200g}]` : '';
  const str1kg = price_1kg ? `|${PO_1kg}[+${price_1kg-price_200g}]` : '';
  const strDripbag =  price_dripbag ? `|${PO_dripbag}[+${price_dripbag-price_200g}]` : '';
  const strGreenBean = price_gb ? `|${PO_gb}[+${price_gb-price_200g}]` : '';
  const special = category === 'Special';
  const grindSizes = special ? '不需要研磨 (Whole beans)' : '不需要研磨 (Whole beans)|粗 (Filter)|中 (Aeropress)|幼 (Espresso)';
  const packages = special ? '5 x 50g' : PO_200g + str500g + str1kg + strDripbag + strGreenBean;
  return (
    <button className="snipcart-add-item"
      data-item-id={pid}
      data-item-price={price_200g}
      data-item-url={url}
      data-item-description={category}
      data-item-image={image}
      data-item-name={`${country} ${display_name} ${process?process:''}`}
      data-item-weight='200'
      data-item-custom1-name="研磨度 Grind size"
      data-item-custom1-options={grindSizes}
      data-item-custom1-value="不需要研磨 (Whole beans)"
      data-item-custom1-required="true"
      data-item-custom2-name="包裝/種類 Package/Type"
      // data-item-custom2-options={`${PO_200g}|${PO_500g}[+${price_500g-price_200g}]|${PO_1kg}[+${price_1kg-price_200g}]|${PO_dripbag}[+${price_dripbag-price_200g}]|${PO_gb}[+${price_gb-price_200g}]`}
      data-item-custom2-options={packages}
      data-item-custom2-value={ special? '5 x 50g' : defaultPackageOpt}
      data-item-custom2-required="true"
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

export default SnipcartButton;