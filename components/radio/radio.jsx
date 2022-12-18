import styles from './radio.module.scss';

export default function Radio(props) {
	return (
		<input
			onClick={props.onClick}
			type='radio'
			className={styles.radio}
			name='name'
		/>
	);
}
