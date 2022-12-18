import styles from './Header.module.scss';

export default function Header(props) {
    return (
        <header className={styles.header}>
            <div className={styles.header__icons}>
                <div className={styles.icons__quest}>
                    <div className={styles.quest__img}/>
                    <div className={styles.quest__text}>{props.passedQuestion}/{props.questions}</div>
                </div>
                <div className={styles.icons__time}>
                    <div className={styles.time__img}/>
                    <div className={styles.time__text}>10:00</div>
                </div>
            </div>
            <div className={styles.header__text}>{props.text}</div>
            <div className={styles.header__logo}></div>
        </header>
    )
}