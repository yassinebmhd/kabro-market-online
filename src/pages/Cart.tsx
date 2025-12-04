import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import CartItem from '@/components/cart/CartItem';
import CartSummary from '@/components/cart/CartSummary';
import { useCart } from '@/context/CartContext';

const Cart = () => {
  const { items, totalItems, clearCart } = useCart();

  return (
    <>
      <Helmet>
        <title>Mon Panier | Kabro - Supérette Premium</title>
        <meta name="description" content="Consultez votre panier et finalisez votre commande chez Kabro." />
      </Helmet>

      <Layout>
        <div className="container-kabro py-8 md:py-12">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Mon Panier
            </h1>
            {items.length > 0 && (
              <button
                onClick={clearCart}
                className="text-sm text-muted-foreground hover:text-destructive transition-colors"
              >
                Vider le panier
              </button>
            )}
          </div>

          {items.length > 0 ? (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart items */}
              <div className="lg:col-span-2">
                <div className="bg-background">
                  {items.map((item) => (
                    <CartItem key={item.product.id} item={item} />
                  ))}
                </div>
              </div>

              {/* Summary */}
              <div className="lg:col-span-1">
                <CartSummary />
              </div>
            </div>
          ) : (
            <div className="text-center py-16 md:py-24">
              <div className="w-24 h-24 mx-auto mb-6 bg-secondary rounded-full flex items-center justify-center">
                <ShoppingBag size={40} className="text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-2">
                Votre panier est vide
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Découvrez nos produits et ajoutez vos favoris à votre panier pour commencer vos achats.
              </p>
              <Link
                to="/shop"
                className="btn-accent inline-flex items-center gap-2"
              >
                Découvrir la boutique
                <ArrowRight size={18} />
              </Link>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Cart;
