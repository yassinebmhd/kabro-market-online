import { Link } from 'react-router-dom';
import { ShoppingCart, Star, Heart } from 'lucide-react';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard = ({ product, className }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    toast.success(`${product.name} ajouté au panier`, {
      description: `Prix: ${product.price.toFixed(2)}€`,
    });
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link
      to={`/product/${product.id}`}
      className={cn("card-product group block", className)}
    >
      {/* Image container */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {discount > 0 && (
            <span className="px-2 py-1 bg-accent text-accent-foreground text-xs font-bold">
              -{discount}%
            </span>
          )}
          {product.featured && (
            <span className="px-2 py-1 bg-foreground text-primary-foreground text-xs font-medium">
              Vedette
            </span>
          )}
        </div>

        {/* Wishlist button */}
        <button
          onClick={(e) => e.preventDefault()}
          className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
        >
          <Heart size={18} className="text-foreground" />
        </button>

        {/* Quick add button */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-3 left-3 right-3 py-3 bg-foreground text-primary-foreground font-medium text-sm flex items-center justify-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
        >
          <ShoppingCart size={16} />
          Ajouter au panier
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
          {product.category.replace('-', ' ')}
        </p>
        <h3 className="font-medium text-foreground line-clamp-2 mb-2 group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <Star size={14} className="fill-accent text-accent" />
          <span className="text-sm text-foreground">{product.rating}</span>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-foreground">
            {product.price.toFixed(2)}€
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {product.originalPrice.toFixed(2)}€
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
