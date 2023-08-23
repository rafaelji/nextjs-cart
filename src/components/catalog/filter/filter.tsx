import styles from "./filter.module.scss";
export const Filter = () => {
  return (
    <select className={styles.select}>
      <option>Highest Price</option>
      <option>Lowest Price</option>
      <option>Title - A to Z</option>
      <option>Title - Z to A</option>
    </select>
  );
};
