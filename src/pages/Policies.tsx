import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Truck, RotateCcw, ShieldCheck, FileText } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const policies = [
  {
    id: 'livraison',
    icon: Truck,
    title: 'Politique de Livraison',
    content: [
      {
        subtitle: 'Zones de livraison',
        text: 'Nous livrons dans toute la France métropolitaine. Les livraisons sont effectuées du lundi au samedi, de 8h à 20h.',
      },
      {
        subtitle: 'Délais de livraison',
        text: 'Les commandes passées avant 14h sont expédiées le jour même. Le délai de livraison est généralement de 24 à 48 heures ouvrées.',
      },
      {
        subtitle: 'Frais de livraison',
        text: 'La livraison est gratuite pour toute commande supérieure à 50€. En dessous de ce montant, les frais de livraison sont de 4,99€.',
      },
      {
        subtitle: 'Suivi de commande',
        text: 'Un email de confirmation avec un numéro de suivi vous est envoyé dès l\'expédition de votre commande.',
      },
    ],
  },
  {
    id: 'retours',
    icon: RotateCcw,
    title: 'Politique de Retours',
    content: [
      {
        subtitle: 'Délai de rétractation',
        text: 'Vous disposez d\'un délai de 14 jours à compter de la réception de votre commande pour exercer votre droit de rétractation.',
      },
      {
        subtitle: 'Conditions de retour',
        text: 'Les produits doivent être retournés dans leur état d\'origine, non ouverts et dans leur emballage d\'origine. Les produits frais ne peuvent pas être retournés pour des raisons sanitaires.',
      },
      {
        subtitle: 'Procédure de retour',
        text: 'Contactez notre service client pour obtenir un numéro de retour. Les frais de retour sont à la charge du client, sauf en cas de produit défectueux.',
      },
      {
        subtitle: 'Remboursement',
        text: 'Le remboursement est effectué dans un délai de 14 jours suivant la réception du produit retourné, sur le même moyen de paiement que celui utilisé lors de l\'achat.',
      },
    ],
  },
  {
    id: 'confidentialite',
    icon: ShieldCheck,
    title: 'Politique de Confidentialité',
    content: [
      {
        subtitle: 'Collecte des données',
        text: 'Nous collectons uniquement les données nécessaires au traitement de vos commandes : nom, adresse, email, téléphone.',
      },
      {
        subtitle: 'Utilisation des données',
        text: 'Vos données sont utilisées exclusivement pour le traitement de vos commandes, la livraison et la communication relative à vos achats.',
      },
      {
        subtitle: 'Protection des données',
        text: 'Vos données sont stockées de manière sécurisée et ne sont jamais vendues à des tiers. Nous utilisons un cryptage SSL pour protéger vos informations.',
      },
      {
        subtitle: 'Vos droits',
        text: 'Conformément au RGPD, vous disposez d\'un droit d\'accès, de rectification et de suppression de vos données personnelles.',
      },
    ],
  },
  {
    id: 'cgv',
    icon: FileText,
    title: 'Conditions Générales de Vente',
    content: [
      {
        subtitle: 'Objet',
        text: 'Les présentes CGV régissent les ventes de produits effectuées sur le site kabro.fr et définissent les droits et obligations des parties dans le cadre de la vente en ligne.',
      },
      {
        subtitle: 'Prix',
        text: 'Les prix sont indiqués en euros TTC. Kabro se réserve le droit de modifier ses prix à tout moment. Les produits sont facturés au prix en vigueur au moment de la commande.',
      },
      {
        subtitle: 'Paiement',
        text: 'Le paiement s\'effectue en ligne par carte bancaire (Visa, Mastercard) ou PayPal. Le paiement est sécurisé par notre prestataire de paiement.',
      },
      {
        subtitle: 'Responsabilité',
        text: 'Kabro ne saurait être tenu responsable des dommages résultant d\'une mauvaise utilisation des produits ou du non-respect des conditions de conservation.',
      },
    ],
  },
];

const Policies = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  return (
    <>
      <Helmet>
        <title>Politiques | Kabro - Livraison, Retours, Confidentialité</title>
        <meta
          name="description"
          content="Consultez nos politiques de livraison, retours, confidentialité et conditions générales de vente."
        />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="bg-foreground py-16 md:py-20">
          <div className="container-kabro text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-4">
              Nos Politiques
            </h1>
            <p className="text-primary-foreground/70 max-w-xl mx-auto">
              Transparence et confiance sont au cœur de notre engagement envers vous.
            </p>
          </div>
        </section>

        {/* Quick links */}
        <section className="bg-secondary py-6">
          <div className="container-kabro">
            <div className="flex flex-wrap gap-4 justify-center">
              {policies.map((policy) => (
                <a
                  key={policy.id}
                  href={`#${policy.id}`}
                  className="flex items-center gap-2 px-4 py-2 bg-background hover:bg-foreground hover:text-primary-foreground transition-colors"
                >
                  <policy.icon size={16} />
                  <span className="text-sm font-medium">{policy.title}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Policies */}
        <section className="py-16 md:py-24">
          <div className="container-kabro max-w-4xl">
            {policies.map((policy, pIndex) => (
              <article
                key={policy.id}
                id={policy.id}
                className={`scroll-mt-24 ${pIndex > 0 ? 'mt-16 pt-16 border-t border-border' : ''}`}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-foreground flex items-center justify-center">
                    <policy.icon className="text-accent" size={24} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                    {policy.title}
                  </h2>
                </div>

                <div className="space-y-8">
                  {policy.content.map((section, sIndex) => (
                    <div key={sIndex}>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {section.subtitle}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {section.text}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-secondary">
          <div className="container-kabro text-center">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">
              Des questions ?
            </h2>
            <p className="text-muted-foreground mb-6">
              Notre équipe est à votre disposition pour répondre à toutes vos questions.
            </p>
            <a
              href="mailto:contact@kabro.fr"
              className="btn-primary inline-block"
            >
              Nous contacter
            </a>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Policies;
