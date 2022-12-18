import connectMongo from '../../utils/connect';
import Question from '../../models/question'

export default async function handlerQuestions(req, res) {
	await connectMongo();
	if (req.method === 'POST') {
		try {
			const { number, question, options, answer, img } = req.body;
			const quest = new Question({
				number,
				question,
				options,
				answer,
				img,
			});
			await quest.save();
			res.json(quest);
		} catch (error) {
			console.log(error);
		}
	} else {
		try {
			const quest = await Question.find();
			res.json(quest);
		} catch (error) {
			console.log(error);
		}
	}
}
