import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Newsletter */}
      <div className="border-b border-primary-foreground/10">
        <div className="container-kabro py-12">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-2xl font-display font-semibold mb-2">
              Restez informé
            </h3>
            <p className="text-primary-foreground/70 mb-6">
              Inscrivez-vous pour recevoir nos offres exclusives et nouveautés
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="submit"
                className="btn-accent whitespace-nowrap"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-kabro py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <h2 className="text-2xl font-display font-bold">
                <span className="text-primary-foreground">KA</span>
                <span className="text-accent">BRO</span>
              </h2>
            </Link>
            <p className="text-primary-foreground/70 mb-6">
              Votre supérette de qualité. Produits frais, locaux et sélectionnés avec soin.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground rounded-full transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground rounded-full transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground rounded-full transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Boutique
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/policies" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Politiques
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-semibold mb-4">Informations</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/policies#livraison" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Livraison
                </Link>
              </li>
              <li>
                <Link to="/policies#retours" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Retours & Remboursements
                </Link>
              </li>
              <li>
                <Link to="/policies#confidentialite" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Politique de Confidentialité
                </Link>
              </li>
              <li>
                <Link to="/policies#cgv" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  CGV
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <MapPin size={18} className="text-accent flex-shrink-0" />
                <span>123 Rue du Commerce, 75001 Paris</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <span>01 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <span>contact@kabro.fr</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-kabro py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/50">
          <p>© 2024 Kabro. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <span>Paiement sécurisé</span>
            <div className="flex gap-2">
              <div className="w-10 h-6 bg-primary-foreground/20 rounded flex items-center justify-center text-xs">VISA</div>
              <div className="w-10 h-6 bg-primary-foreground/20 rounded flex items-center justify-center text-xs">MC</div>
              <div className="w-10 h-6 bg-primary-foreground/20 rounded flex items-center justify-center text-xs">PP</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
