import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.shopName}>Sweet Cakes</div>
      <div className={styles.address}>Москва, ул. Пушкина, 10</div>
      <div className={styles.phone}>+7 (999) 123-45-67</div>
    </header>
  );
};