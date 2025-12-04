import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import PromoBar from '@/components/home/PromoBar';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import Categories from '@/components/home/Categories';
import CtaBanner from '@/components/home/CtaBanner';
import Testimonials from '@/components/home/Testimonials';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Kabro | Votre Supérette Premium - Produits Frais & Locaux</title>
        <meta 
          name="description" 
          content="Découvrez Kabro, votre supérette de qualité avec des produits frais, locaux et de saison. Livraison rapide à domicile. Fruits, légumes, viandes, épicerie fine." 
        />
        <meta name="keywords" content="supérette, épicerie, produits frais, livraison, fruits légumes, viandes, Paris" />
        <link rel="canonical" href="https://kabro.fr" />
      </Helmet>
      
      <Layout>
        <HeroSection />
        <PromoBar />
        <FeaturedProducts />
        <Categories />
        <CtaBanner />
        <Testimonials />
      </Layout>
    </>
  );
};

export default Index;
