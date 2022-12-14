import styles from '../styles/Home.module.scss';
import Head from 'next/head';
import Button from '../components/button/button.jsx';
import RadioButton from '../components/radioButton/radioButton.jsx';
import Select from '../components/select/select.jsx';
import Header from '../components/header/header.jsx';
import { useRef, useState } from 'react';

export default function Home(props) {
	const [activeQuestion, setActiveQuestion] = useState(0);
	const [activeOption, setActiveOption] = useState();
	const answers = useRef([]);
	const [option1, setOption1] = useState(false);
	const [option2, setOption2] = useState(false);
	const [option3, setOption3] = useState(false);
	const [option4, setOption4] = useState(false);
	const [result, setResult] = useState();

	if (!props) 'Loading...';

	function changeActiveQuestion(number) {
		setActiveQuestion(number);
	}

	function changeActiveOption(option) {
		if (JSON.stringify(activeOption) === JSON.stringify(option))
			setActiveOption(null);
		else setActiveOption(option);
	}

	async function addArrayAnswers() {
		if (props.data.length > activeQuestion) {
			if (props.data.length !== activeQuestion + 1)
				setActiveQuestion(activeQuestion + 1);
			setOption1(false);
			setOption2(false);
			setOption3(false);
			setOption4(false);
			setActiveOption(null);
			answers.current = [...answers.current, activeOption];
			console.log(answers.current);
		}
		if (props.data.length === activeQuestion + 1) {
			let response = await fetch('http://localhost:3000/api/sendResult', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json',
				},
				body: JSON.stringify({ answers: answers.current }),
			});
			let result = await response.json();
			setResult(result);
		}
	}

	return (
		<>
			<Head>
				<title>NesxJs</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={styles.container}>
				<Select
					onClick={changeActiveQuestion}
					activeQuestion={activeQuestion}
					question={props.data.length}
				/>
				<div className={styles.header__and__content}>
					<Header
						text={'?????????????? ?????????????????????????? ??????????'}
						questions={props.data.length}
						passedQuestion={
							result !== undefined ? activeQuestion + 1 : activeQuestion
						}
					/>
					{result !== undefined ? (
						<div className={styles.content__container}>
							{'?????? ??????????????????: '}
							{result}
						</div>
					) : (
						<div className={styles.content__container}>
							<div className={styles.content}>
								{props.data[activeQuestion].img && (
									<img
										className={styles.img}
										src={props.data[activeQuestion].img}
									></img>
								)}
								<div className={styles.question}>
									{props.data[activeQuestion].question}
								</div>
								<div className={styles.answers}>
									<RadioButton
										number={props.data[activeQuestion].number}
										text={props.data[activeQuestion].options[0]}
										changeActiveOption={changeActiveOption}
										checked={option1}
										onClick={() => {
											setOption1(!option1);
											setOption2(false);
											setOption3(false);
											setOption4(false);
										}}
									/>
									<RadioButton
										number={props.data[activeQuestion].number}
										text={props.data[activeQuestion].options[1]}
										changeActiveOption={changeActiveOption}
										checked={option2}
										onClick={() => {
											setOption1(false);
											setOption2(!option2);
											setOption3(false);
											setOption4(false);
										}}
									/>
									<RadioButton
										number={props.data[activeQuestion].number}
										text={props.data[activeQuestion].options[2]}
										changeActiveOption={changeActiveOption}
										checked={option3}
										onClick={() => {
											setOption1(false);
											setOption2(false);
											setOption3(!option3);
											setOption4(false);
										}}
									/>
									<RadioButton
										number={props.data[activeQuestion].number}
										text={props.data[activeQuestion].options[3]}
										changeActiveOption={changeActiveOption}
										checked={option4}
										onClick={() => {
											setOption1(false);
											setOption2(false);
											setOption3(false);
											setOption4(!option4);
										}}
									/>
								</div>
								<div className={styles.buttons}>
									<Button text={'????????????????????'} />
									<Button
										onClick={addArrayAnswers}
										disabled={activeOption ? false : true}
										text={'????????????????'}
									/>
								</div>
							</div>
						</div>
					)}
				</div>
			</main>
		</>
	);
}

export async function getServerSideProps(context) {
	const res = await fetch(`http://localhost:3000/api/questions`);
	const data = await res.json();
	if (!data) {
		return {
			notFound: true,
		};
	}

	return {
		props: { data },
	};
}
