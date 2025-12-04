import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType, useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  return (
    <div className="flex gap-4 py-6 border-b border-border animate-fade-in">
      {/* Image */}
      <Link to={`/product/${product.id}`} className="flex-shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-24 h-24 object-cover bg-secondary"
        />
      </Link>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-foreground hover:text-accent transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground mt-1">
          {product.category.replace('-', ' ')}
        </p>
        <p className="text-lg font-semibold text-foreground mt-2">
          {product.price.toFixed(2)}€
        </p>
      </div>

      {/* Quantity controls */}
      <div className="flex flex-col items-end gap-4">
        <button
          onClick={() => removeFromCart(product.id)}
          className="p-2 text-muted-foreground hover:text-destructive transition-colors"
          aria-label="Remove item"
        >
          <Trash2 size={18} />
        </button>

        <div className="flex items-center border border-border">
          <button
            onClick={() => updateQuantity(product.id, quantity - 1)}
            className="p-2 hover:bg-secondary transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus size={16} />
          </button>
          <span className="w-12 text-center font-medium">{quantity}</span>
          <button
            onClick={() => updateQuantity(product.id, quantity + 1)}
            className="p-2 hover:bg-secondary transition-colors"
            aria-label="Increase quantity"
          >
            <Plus size={16} />
          </button>
        </div>

        <p className="font-semibold text-foreground">
          {(product.price * quantity).toFixed(2)}€
        </p>
      </div>
    </div>
  );
};

export default CartItem;
