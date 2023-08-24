import styles from "./cart-amount.module.scss";
import { CartAmountProps } from "@/components/cart-amount/cart-amount.types";
export const CartAmount = ({ amount }: CartAmountProps) => {
  return <div className={styles.amount}>{amount}</div>;
};
