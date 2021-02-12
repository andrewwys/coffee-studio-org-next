import ProductCard from '../blocks/product-card'

const ProductHighlights = ({productList}) => {
  if (!productList) return null;
  return(
    <div className='product-highlights'>
      <div className='highlight-header'>精選豆</div>
      <div className='product-wrapper'>
        {productList.map((product)=>(<ProductCard key={product.slug} productProps={product.fm}/>))}
      </div>
    </div>
  )
}

//

export default ProductHighlights;