import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Leaf, Award, Heart } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const values = [
  {
    icon: Leaf,
    title: 'Qualité Premium',
    description: 'Nous sélectionnons uniquement les meilleurs produits, frais et de saison.',
  },
  {
    icon: Users,
    title: 'Local & Responsable',
    description: 'Nous privilégions les producteurs locaux et les circuits courts.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Chaque produit est soigneusement contrôlé pour garantir votre satisfaction.',
  },
  {
    icon: Heart,
    title: 'Service Client',
    description: 'Une équipe dédiée à votre écoute pour vous accompagner.',
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>À Propos | Kabro - Votre Supérette Premium</title>
        <meta
          name="description"
          content="Découvrez l'histoire de Kabro, votre supérette de qualité. Produits frais, locaux et sélectionnés avec soin depuis 2010."
        />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="relative bg-foreground py-20 md:py-32 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1920&q=80')`,
            }}
          />
          <div className="container-kabro relative z-10 text-center">
            <span className="text-accent text-sm font-medium uppercase tracking-wider">
              Notre Histoire
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mt-4 mb-6">
              La passion de la qualité
            </h1>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              Depuis 2010, Kabro s'engage à vous offrir une expérience d'achat unique avec des produits d'exception.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 md:py-24">
          <div className="container-kabro">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-accent text-sm font-medium uppercase tracking-wider">
                  Qui sommes-nous
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-6">
                  Une supérette pas comme les autres
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Fondée en 2010 par Marie et Jean Kabro, notre supérette est née d'une vision simple : proposer des produits de qualité exceptionnelle, accessibles à tous.
                  </p>
                  <p>
                    Nous travaillons directement avec plus de 50 producteurs locaux pour vous garantir fraîcheur et traçabilité. Chaque produit est sélectionné avec soin, selon des critères stricts de qualité et de respect de l'environnement.
                  </p>
                  <p>
                    Aujourd'hui, Kabro c'est une équipe de passionnés dévoués à vous offrir le meilleur de l'alimentation, que ce soit en magasin ou livré directement chez vous.
                  </p>
                </div>
                <Link
                  to="/shop"
                  className="btn-accent inline-flex items-center gap-2 mt-8"
                >
                  Découvrir nos produits
                  <ArrowRight size={18} />
                </Link>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop"
                  alt="Notre équipe"
                  className="w-full h-auto"
                />
                <div className="absolute -bottom-6 -left-6 bg-foreground p-6 text-primary-foreground">
                  <p className="text-4xl font-display font-bold text-accent">14+</p>
                  <p className="text-sm">Années d'expérience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container-kabro">
            <div className="text-center mb-12">
              <span className="text-accent text-sm font-medium uppercase tracking-wider">
                Nos Valeurs
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
                Ce qui nous anime
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-background p-8 text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-foreground flex items-center justify-center">
                    <value.icon className="text-accent" size={28} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 md:py-24 bg-foreground text-primary-foreground">
          <div className="container-kabro">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl md:text-5xl font-display font-bold text-accent">500+</p>
                <p className="text-primary-foreground/70 mt-2">Produits</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-display font-bold text-accent">50+</p>
                <p className="text-primary-foreground/70 mt-2">Producteurs locaux</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-display font-bold text-accent">10K+</p>
                <p className="text-primary-foreground/70 mt-2">Clients satisfaits</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-display font-bold text-accent">98%</p>
                <p className="text-primary-foreground/70 mt-2">Satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="container-kabro text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Prêt à découvrir Kabro ?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Rejoignez notre communauté de gourmets et découvrez des produits d'exception livrés chez vous.
            </p>
            <Link to="/shop" className="btn-accent inline-flex items-center gap-2">
              Commencer mes achats
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
