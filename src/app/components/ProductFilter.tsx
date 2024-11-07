'use client';
// Vendor
import { FC } from 'react';
//Styles
import styles from './ProductFilter.module.css';

type ProductFilterProps = {
  onFilterChange: (filter: string) => void;
};

const ProductFilter: FC<ProductFilterProps> = ({ onFilterChange }) => {
  return (
    <div className={styles.productFilter}>
      <input
        type="text"
        placeholder="Filtrar productos..."
        onChange={(e) => onFilterChange(e.target.value)}
      />
    </div>
  );
};

export { ProductFilter };
