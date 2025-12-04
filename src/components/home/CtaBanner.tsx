import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CtaBanner = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-kabro">
        <div className="relative overflow-hidden bg-foreground">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative grid md:grid-cols-2 gap-8 items-center p-8 md:p-12 lg:p-16">
            {/* Content */}
            <div>
              <span className="inline-block px-4 py-1 bg-accent text-accent-foreground text-sm font-medium mb-4">
                Offre Spéciale
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-4">
                -20% sur votre première commande
              </h2>
              <p className="text-primary-foreground/70 mb-8 max-w-md">
                Inscrivez-vous maintenant et profitez de 20% de réduction sur votre première commande avec le code BIENVENUE20
              </p>
              <Link
                to="/shop"
                className="btn-accent inline-flex items-center gap-2 group"
              >
                En profiter maintenant
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Image */}
            <div className="relative hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1608686207856-001b95cf60ca?w=600&h=400&fit=crop"
                alt="Panier de produits frais"
                className="w-full h-64 lg:h-80 object-cover"
                loading="lazy"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground p-4 text-center">
                <p className="text-3xl font-display font-bold">-20%</p>
                <p className="text-sm">Code: BIENVENUE20</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
