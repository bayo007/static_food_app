import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";
import { useRouter } from 'next/router';

const PizzaCard = () => {
  const router = useRouter()
  return (
    <div className={styles.container} onClick={()=>router.push('/product')}>
      <Image src="/img/pizza.jpg" alt="" width="500" height="500" />
      <h1 className={styles.title}>FIORI DI ZUCCA</h1>
      <span className={styles.price}>$10.00</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default PizzaCard;
