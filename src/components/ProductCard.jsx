import { Star, ShoppingCart } from 'lucide-react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <div className="product-rating">
          <Star className="star-icon" size={16} fill="#fbbf24" color="#fbbf24" />
          <span>{product.rating}</span>
        </div>
        <div className="product-price">₹{product.price.toFixed(2)}</div>
        <button 
          className="add-to-cart-btn"
          onClick={() => onAddToCart(product)}
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
