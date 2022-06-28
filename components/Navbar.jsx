import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>012 345 678</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem} onClick={()=>router.push('/')}>Homepage</li>
          <li className={styles.listItem} onClick={()=>router.push('/about')}>About</li> 
          <Image src="/img/logo.png" alt="" width="160px" height="69px" />
          <li className={styles.listItem} onClick={()=>router.push('/cart')}>Cart</li>
          <li className={styles.listItem} onClick={()=>router.push('/order')}>Order</li>
          <li className={styles.listItem} onClick={()=>router.push('/product')}>Products</li>
        </ul>
      </div>
      <div className={styles.item} onClick={()=>router.push('/cart')}>
        <div className={styles.cart}>
          <Image src="/img/cart.png" alt="" width="30px" height="30px" />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
