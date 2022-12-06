const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/test';
const cors = require('cors');
const app = express();
const PORT = 5000;

const Question = require('./models/question');
app.use(cors());
app.use(express.json());

app.post('/add', async (req, res) => {
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
});

app.get('/', async (req, res) => {
	try {
		const quest = await Question.find();
		res.json(quest);
	} catch (error) {
		console.log(error);
	}
});

async function start() {
	try {
		mongoose.connect(url, () => {
			console.log('db connected');
		});
		app.listen(PORT, () => {
			console.log('App starting on 5000 port');
		});
	} catch (error) {
		console.log(error);
	}
}

start();
