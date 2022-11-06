import styles from "./select.module.scss";

export default function Select(props) {

  const arr = [];
  for (let i = 1; i < props.question; i++) {
    arr.push(i);
  }
  console.log(arr);
  return (
    <div className={styles.container}>
          <div className={styles.back}/>
          {arr.map((question) => {
            return <div className={styles.question}>{question}</div>
          })}
          <div className={styles.lastquestion}>{props.question}</div>
    </div>
  );
}