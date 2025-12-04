import { Link } from 'react-router-dom';
import { Truck, ShieldCheck, Clock, Leaf } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Livraison Rapide',
    description: 'Livraison en 24h',
  },
  {
    icon: ShieldCheck,
    title: 'Paiement Sécurisé',
    description: '100% sécurisé',
  },
  {
    icon: Clock,
    title: 'Service Client',
    description: '7j/7 disponible',
  },
  {
    icon: Leaf,
    title: 'Produits Frais',
    description: 'Qualité garantie',
  },
];

const PromoBar = () => {
  return (
    <section className="py-8 bg-cream border-y border-border">
      <div className="container-kabro">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-4 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-foreground flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-medium text-foreground text-sm md:text-base">
                  {feature.title}
                </h4>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoBar;
