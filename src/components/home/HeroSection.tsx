import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-foreground">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1542838132-92c53300491e?w=1920&q=80')`,
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/90 to-transparent" />

      <div className="container-kabro relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-accent text-sm font-medium">
              Livraison gratuite dès 50€
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6 animate-slide-up">
            La qualité{' '}
            <span className="text-accent">premium</span>
            <br />
            à votre porte
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/70 mb-8 max-w-lg animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Découvrez notre sélection de produits frais, locaux et de saison. Kabro, votre supérette d'exception.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Link
              to="/shop"
              className="btn-accent inline-flex items-center justify-center gap-2 group"
            >
              Découvrir la boutique
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="btn-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground inline-flex items-center justify-center"
            >
              Notre histoire
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-primary-foreground/10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div>
              <p className="text-3xl md:text-4xl font-display font-bold text-accent">500+</p>
              <p className="text-primary-foreground/60 text-sm">Produits</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display font-bold text-accent">98%</p>
              <p className="text-primary-foreground/60 text-sm">Clients satisfaits</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display font-bold text-accent">24h</p>
              <p className="text-primary-foreground/60 text-sm">Livraison</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
