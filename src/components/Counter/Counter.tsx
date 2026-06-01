import styles from './Counter.module.css';

interface CounterProps {
  count: number;
  setCount: (n: number) => void;
  price: number;
}

export const Counter = ({ count, setCount, price }: CounterProps) => {
  return (
    <div className={styles.counter}>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
      <div>Итого: {count * price}₽</div>
    </div>
  );
};