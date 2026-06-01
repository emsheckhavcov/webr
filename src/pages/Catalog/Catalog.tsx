import styles from './Catalog.module.css';
import { CakeCard } from '../../components/CakeCard/CakeCard';

const cakes = [
  { name: 'Шоколадный', price: 500, image: '/assets/cake1.png' },
  { name: 'Клубничный', price: 450, image: '/assets/cake2.png' },
  { name: 'Ванильный', price: 400, image: '/assets/cake3.png' },
];

export const Catalog = () => {
  return (
    <section className={styles.catalog}>
      <h2>Каталог пирожных</h2>
      <div className={styles.grid}>
        {cakes.map((cake) => (
          <CakeCard key={cake.name} {...cake} />
        ))}
      </div>
    </section>
  );
};