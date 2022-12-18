import { Schema, model, models } from 'mongoose';

const question = new Schema({
	number: { type: Number, unique: true, required: true, dropDups: true },
	question: { type: String, required: true },
	options: { type: Array(String), required: true },
	answer: { type: String, required: true },
	img: { type: String },
});

const Question = models.Question || model('Question', question);

export default Question;
