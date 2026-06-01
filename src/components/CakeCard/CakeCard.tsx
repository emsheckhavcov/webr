import { useState } from 'react';
import styles from './CakeCard.module.css';
import { Counter } from '../Counter/Counter';

interface CakeCardProps {
  name: string;
  price: number;
  image: string;
}

export const CakeCard = ({ name, price, image }: CakeCardProps) => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <h3 className={styles.title}>{name}</h3>
      {count === 0 ? (
        <button className={styles.orderBtn} onClick={() => setCount(1)}>Заказать</button>
      ) : (
        <Counter count={count} setCount={setCount} price={price} />
      )}
    </div>
  );
};