import { useState } from 'react';
import { categories } from '@/data/products';
import { cn } from '@/lib/utils';
import { SlidersHorizontal, X } from 'lucide-react';

interface FilterSidebarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  isMobileOpen?: boolean;
  onMobileClose?: () => void;
}

const FilterSidebar = ({
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  isMobileOpen,
  onMobileClose,
}: FilterSidebarProps) => {
  return (
    <>
      {/* Mobile overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-foreground/50 z-40 lg:hidden"
          onClick={onMobileClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed lg:static inset-y-0 left-0 w-72 bg-background border-r border-border z-50 transform transition-transform duration-300 lg:transform-none",
          isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="h-full overflow-y-auto p-6">
          {/* Mobile header */}
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <h3 className="font-semibold text-foreground">Filtres</h3>
            <button onClick={onMobileClose} className="p-2 hover:bg-secondary rounded-full">
              <X size={20} />
            </button>
          </div>

          {/* Categories */}
          <div className="mb-8">
            <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <SlidersHorizontal size={16} />
              Catégories
            </h4>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    onClick={() => onCategoryChange(category.id)}
                    className={cn(
                      "w-full text-left px-3 py-2 rounded transition-colors flex items-center gap-2",
                      selectedCategory === category.id
                        ? "bg-foreground text-primary-foreground"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    )}
                  >
                    <span>{category.icon}</span>
                    <span className="text-sm">{category.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Price Range */}
          <div className="mb-8">
            <h4 className="font-semibold text-foreground mb-4">Prix</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => onPriceRangeChange([Number(e.target.value), priceRange[1]])}
                  className="input-kabro w-full text-sm"
                  placeholder="Min"
                  min={0}
                />
                <span className="text-muted-foreground">-</span>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => onPriceRangeChange([priceRange[0], Number(e.target.value)])}
                  className="input-kabro w-full text-sm"
                  placeholder="Max"
                  min={0}
                />
              </div>
              <input
                type="range"
                min={0}
                max={100}
                value={priceRange[1]}
                onChange={(e) => onPriceRangeChange([priceRange[0], Number(e.target.value)])}
                className="w-full accent-accent"
              />
            </div>
          </div>

          {/* Stock filter */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Disponibilité</h4>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 accent-accent"
              />
              <span className="text-sm text-muted-foreground">En stock uniquement</span>
            </label>
          </div>
        </div>
      </aside>
    </>
  );
};

export default FilterSidebar;
