import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

const categoryImages: Record<string, string> = {
  'fruits-legumes': 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&h=400&fit=crop',
  'viandes': 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&h=400&fit=crop',
  'produits-laitiers': 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400&h=400&fit=crop',
  'epicerie': 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop',
  'boissons': 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&h=400&fit=crop',
  'surgeles': 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=400&fit=crop',
};

const Categories = () => {
  const displayCategories = categories.filter((c) => c.id !== 'all' && c.id !== 'hygiene');

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container-kabro">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-medium uppercase tracking-wider">
            Explorer
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
            Nos catégories
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {displayCategories.map((category, index) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-square overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Image */}
              <img
                src={categoryImages[category.id] || 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=400&fit=crop'}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-foreground/60 group-hover:bg-foreground/70 transition-colors" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <span className="text-3xl mb-2">{category.icon}</span>
                <h3 className="text-primary-foreground font-medium text-sm md:text-base">
                  {category.name}
                </h3>
              </div>

              {/* Hover border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
