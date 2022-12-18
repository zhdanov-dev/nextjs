import styles from './radiobutton.module.scss';

export default function RadioButton(props) {
	function changeActiveOption() {
		props.changeActiveOption({ number: props.number, answer: props.text });
		props.onClick();
	}

	return (
		<label
			className={`${styles.radioButton}  ${
				props.disabled ? styles.disabled : ''
			}`}
		>
			<input
				onClick={changeActiveOption}
				type='radio'
				className={styles.radio}
				checked={props.checked}
				onChange={() => {}}
			/>
			<span style={{marginLeft: '14px'}}>{props.text}</span>
		</label>
	);
}
