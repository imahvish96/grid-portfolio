import styles from "./style.module.css";

export default function AuroraBackground() {
  return (
    <div aria-hidden="true" className={styles.aurora}>
      <div className={`${styles.blob} ${styles.blob1}`} />
      <div className={`${styles.blob} ${styles.blob2}`} />
      <div className={`${styles.blob} ${styles.blob3}`} />
    </div>
  );
}
