import connectMongo from '../../utils/connect';
import Question from '../../models/question';

export default async function handlerSendResult(req, res) {
	await connectMongo();
	if (req.method === 'POST') {
		try {
			const answers = req.body.answers;
			let result = 0;
			const questions = await Question.find();
			for (let i = 0; i < questions.length; i++) {
				if (questions[i].answer === answers[i].answer) result = result + 1;
			}
			res.json(result);
		} catch (error) {
			console.log(error);
		}
	} 
}
