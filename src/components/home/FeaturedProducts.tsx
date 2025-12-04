import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';

const FeaturedProducts = () => {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-kabro">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-accent text-sm font-medium uppercase tracking-wider">
              Sélection
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
              Nos meilleures ventes
            </h2>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-foreground font-medium mt-4 md:mt-0 hover:text-accent transition-colors group"
          >
            Voir tout
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
