import styles from "./radio.module.scss";

export default function Radio(props) {
  return (
    <input
      className={styles.radio}
      type="radio"
      disabled={props.disabled}
      checked={props.checked}
    />
  );
}
