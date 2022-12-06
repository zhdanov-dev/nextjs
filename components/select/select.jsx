import styles from './select.module.scss';

export default function Select(props) {
	const arr = [];
	for (let i = 1; i < props.question; i++) {
		arr.push(i);
	}

	function changeQuestion(e) {
		props.onClick(Number(e.target.textContent) - 1);
	}

	return (
		<div className={styles.container}>
			<div className={styles.back} />
			{arr.map((question, key) => {
				return (
					<div
						onClick={changeQuestion}
						className={
							props.activeQuestion === question - 1
								? styles.activeQuestion
								: styles.question
						}
            key={key}
					>
						{question}
					</div>
				);
			})}
			<div
				onClick={changeQuestion}
				className={
					props.activeQuestion === props.question - 1
						? styles.activeLastQuestion
						: styles.lastquestion
				}
			>
				{props.question}
			</div>
		</div>
	);
}
