import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ChevronLeft, 
  Minus, 
  Plus, 
  ShoppingCart, 
  Heart, 
  Star,
  Truck,
  ShieldCheck,
  RotateCcw
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/shop/ProductCard';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <Layout>
        <div className="container-kabro py-16 text-center">
          <h1 className="text-2xl font-display font-bold mb-4">Produit non trouvé</h1>
          <Link to="/shop" className="btn-primary inline-block">
            Retour à la boutique
          </Link>
        </div>
      </Layout>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${quantity} x ${product.name} ajouté au panier`);
  };

  return (
    <>
      <Helmet>
        <title>{product.name} | Kabro - Supérette Premium</title>
        <meta name="description" content={product.description} />
        <meta property="og:title" content={`${product.name} | Kabro`} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.image} />
      </Helmet>

      <Layout>
        <div className="container-kabro py-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-foreground transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-foreground transition-colors">
              Boutique
            </Link>
            <span>/</span>
            <Link 
              to={`/shop?category=${product.category}`} 
              className="hover:text-foreground transition-colors capitalize"
            >
              {product.category.replace('-', ' ')}
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>

          {/* Back button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ChevronLeft size={18} />
            Retour
          </button>

          {/* Product section */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Image */}
            <div className="relative">
              <div className="aspect-square bg-secondary overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {discount > 0 && (
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-bold">
                    -{discount}%
                  </span>
                )}
                {product.featured && (
                  <span className="px-3 py-1 bg-foreground text-primary-foreground text-sm font-medium">
                    Vedette
                  </span>
                )}
              </div>

              {/* Wishlist */}
              <button className="absolute top-4 right-4 p-3 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors">
                <Heart size={20} />
              </button>
            </div>

            {/* Details */}
            <div>
              <p className="text-sm text-accent uppercase tracking-wider mb-2">
                {product.category.replace('-', ' ')}
              </p>
              
              <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-border'}
                    />
                  ))}
                </div>
                <span className="text-foreground font-medium">{product.rating}</span>
                <span className="text-muted-foreground">({product.reviews} avis)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-foreground">
                  {product.price.toFixed(2)}€
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    {product.originalPrice.toFixed(2)}€
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Quantity & Add to cart */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center border border-border">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-4 hover:bg-secondary transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="w-16 text-center font-medium text-lg">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-4 hover:bg-secondary transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus size={18} />
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="btn-accent flex-1 flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={18} />
                  Ajouter au panier
                </button>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-border">
                <div className="flex items-center gap-3">
                  <Truck className="text-accent" size={24} />
                  <div>
                    <p className="font-medium text-sm">Livraison rapide</p>
                    <p className="text-xs text-muted-foreground">En 24-48h</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-accent" size={24} />
                  <div>
                    <p className="font-medium text-sm">Paiement sécurisé</p>
                    <p className="text-xs text-muted-foreground">100% sécurisé</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <RotateCcw className="text-accent" size={24} />
                  <div>
                    <p className="font-medium text-sm">Retours faciles</p>
                    <p className="text-xs text-muted-foreground">Sous 14 jours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related products */}
          {relatedProducts.length > 0 && (
            <section>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
                Produits similaires
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </section>
          )}
        </div>
      </Layout>
    </>
  );
};

export default ProductDetail;
