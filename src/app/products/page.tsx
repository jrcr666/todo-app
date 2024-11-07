'use client';
// Vendor
import { useState, useEffect } from 'react';
// Components
import { ProductList } from '../components/ProductList';
import { ProductFilter } from '../components/ProductFilter';
// Api
import { getProducts } from './api/products';

type ProductType = {
  name: string;
  id: number;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Array<ProductType>>([]);
  const [filteredProducts, setFilteredProducts] = useState<Array<ProductType>>(
    [],
  );
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
      setFilteredProducts(data);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(filter.toLowerCase()),
    );
    setFilteredProducts(filtered);
  }, [filter, setFilteredProducts, products]);

  return (
    <div className="productsPage">
      <h1>Productos</h1>
      <ProductFilter onFilterChange={(newFilter) => setFilter(newFilter)} />
      <ProductList products={filteredProducts} />
    </div>
  );
}
