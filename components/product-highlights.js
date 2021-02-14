import ProductCard from '../blocks/product-card'

const ProductHighlights = ({productList}) => {
  if (!productList) return null;
  return(
    <div className='product-highlights'>
      <div className='highlight-header'>精選豆</div>
      <div className='product-wrapper'>
        {productList.map((product)=>(<ProductCard key={product.slug} productProps={product.fm} slug={product.slug}/>))}
      </div>
      <style jsx>{`
        .product-wrapper {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          flex-wrap: wrap;
          margin: 10px 64px;
        }
      `}</style>
    </div>
  )
}

//

export default ProductHighlights;