import { useState } from "react";
import styles from "./check.module.scss";

export default function Check(props) {
  const [isChecked, setIsChecked] = useState(props.checked);

  function onChange() {
    setIsChecked(!isChecked);
  }

  return (
    <input
      className={styles.check}
      type="checkbox"
      disabled={props.disabled}
      onChange={onChange}
      checked={isChecked}
    />
  );
}
