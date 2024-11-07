'use client';
// Vendor
import { FC } from 'react';
// Styles
import styles from './ProductList.module.css';

type Product = {
  id: number;
  name: string;
};

type ProductListProps = {
  products: Product[];
};

const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <div className={styles.productList}>
      <h2>Lista de Productos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export { ProductList };
