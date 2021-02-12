const ProductCard = ({productProps}) => {
  const {country, display_name, process, flavors_main, price_200g } = productProps;
// sample data:::  
// acidity: "4"
// body: "3"
// country: "埃塞俄比亞"
// description: "埃塞俄比亞 查卡藝妓 日曬 Lot 19/004↵風味描述：白花、香橙、蜂蜜、可可"
// display_name: "查卡藝妓村 Lot 19/004"
// finish: "3"
// flavors_desc: "乾香：芒果、水蜜桃、莓果↵濕香：白花、香橙、蜂蜜、可可↵口感扎實，香甜"
// flavors_main: (4) ["白花", "香橙", "蜂蜜", "可可"]
// floral: "4"
// fruits: "5"
// highlight: true
// image: "/uploads/coffee-bean-delivery-hong-kong_0.jpg"
// nuts: "2"
// pid: 1001
// price_1kg: 800
// price_200g: 280
// price_500g: 480
// price_dripbag: 320
// process: "日曬"
// sugars: "3"
// sweetness: "5"
// title: "Ethiopia Chaka Gesha Village N"
  return (
    <div className='product-card'>
      <div className='image-area'>
        <div className='country'>{country}</div>
        <div className='name'>{display_name}</div>
        <div className='process'>{process}</div>
      </div>
      <div className='flavors-main'>
        {flavors_main.map((flavor)=>(<div key={flavor.toString()}>{flavor}</div>))}
      </div>
      <div className='price'>{price_200g}</div>
    </div>
  );
}

export default ProductCard;