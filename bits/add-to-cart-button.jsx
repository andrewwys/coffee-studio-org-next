// This is the Add-to-cart button on product-details page
const AddToCartButton = ({ size }) => {
  return (
    <div>
      <img src='/images/cart-icon.svg' alt='add to cart' width={size} />
    </div>
  );
}

export default AddToCartButton;