import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2026 Sweet Cakes. Все права защищены.</p>
      <p>Контакты: +7 (999) 123-45-67 | Москва, ул. Пушкина, 10</p>
    </footer>
  );
};