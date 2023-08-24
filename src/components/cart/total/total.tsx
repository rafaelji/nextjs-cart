import styles from "./total.module.scss";
import { TotalProps } from "@/components/cart/total/total.types";
export const Total = ({ value }: TotalProps) => {
  return (
    <section className={styles.total}>
      <div className={styles.information}>
        <p>Total</p>
        <p>Inc. £0 in taxes</p>
      </div>
      <div className={styles.value}>
        <h2>£{value}</h2>
      </div>
    </section>
  );
};
