import styles from './Gallery.module.css';

const galleryImages = [
  '/assets/cake1.png',
  '/assets/cake2.png',
  '/assets/cake3.png',
];

export const Gallery = () => {
  return (
    <section className={styles.gallery}>
      <h2>Галерея пирожных</h2>
      <div className={styles.grid}>
        {galleryImages.map((img, index) => (
          <img key={index} src={img} alt={`Пирожное ${index + 1}`} className={styles.image} />
        ))}
      </div>
    </section>
  );
};