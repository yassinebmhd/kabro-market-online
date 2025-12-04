import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { Truck, ShieldCheck, Tag } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const CartSummary = () => {
  const { totalPrice, totalItems } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const shippingCost = totalPrice >= 50 ? 0 : 4.99;
  const finalTotal = totalPrice - discount + shippingCost;

  const handleApplyPromo = () => {
    if (promoCode.toUpperCase() === 'BIENVENUE20') {
      setDiscount(totalPrice * 0.2);
      toast.success('Code promo appliqué ! -20%');
    } else {
      toast.error('Code promo invalide');
    }
  };

  return (
    <div className="bg-secondary p-6 sticky top-24">
      <h3 className="text-lg font-semibold text-foreground mb-6">
        Résumé de commande
      </h3>

      {/* Promo code */}
      <div className="mb-6">
        <label className="text-sm text-muted-foreground mb-2 block">
          Code promo
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Entrer le code"
            className="input-kabro flex-1 text-sm"
          />
          <button
            onClick={handleApplyPromo}
            className="px-4 py-2 bg-foreground text-primary-foreground text-sm font-medium hover:bg-charcoal transition-colors"
          >
            Appliquer
          </button>
        </div>
      </div>

      {/* Order details */}
      <div className="space-y-3 pb-6 border-b border-border">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Sous-total ({totalItems} articles)</span>
          <span className="text-foreground">{totalPrice.toFixed(2)}€</span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between text-sm">
            <span className="text-accent flex items-center gap-1">
              <Tag size={14} />
              Réduction
            </span>
            <span className="text-accent">-{discount.toFixed(2)}€</span>
          </div>
        )}
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Livraison</span>
          <span className="text-foreground">
            {shippingCost === 0 ? (
              <span className="text-accent">Gratuite</span>
            ) : (
              `${shippingCost.toFixed(2)}€`
            )}
          </span>
        </div>
      </div>

      {/* Total */}
      <div className="flex justify-between py-6 border-b border-border">
        <span className="text-lg font-semibold text-foreground">Total</span>
        <span className="text-xl font-bold text-foreground">
          {finalTotal.toFixed(2)}€
        </span>
      </div>

      {/* Checkout button */}
      <button
        className="btn-accent w-full mt-6 text-center"
        onClick={() => toast.info('Checkout en cours de développement')}
      >
        Passer la commande
      </button>

      {/* Trust badges */}
      <div className="mt-6 space-y-3">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <ShieldCheck size={18} className="text-accent" />
          <span>Paiement 100% sécurisé</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <Truck size={18} className="text-accent" />
          <span>Livraison gratuite dès 50€</span>
        </div>
      </div>

      {/* Continue shopping */}
      <Link
        to="/shop"
        className="block text-center mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors underline"
      >
        Continuer mes achats
      </Link>
    </div>
  );
};

export default CartSummary;
