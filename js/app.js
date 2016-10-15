$(document).ready(function () {

var score = 0;
var currentQuestion = 0;
var quiz = [
	{
		number: 1,
		question: "What term refers to a mixture of butter and flour used in making sauces?",
		answers: ["Compote", "Roux", "Doux", "Coulis"],
		rightAnswer: 1,
	}, {	
		number: 2,
		question: "What is it called when you loosen brown bits from a pan by adding a liquid, then heating while stirring and scraping the pan?",
		answers: ["Sear", "Braise", "Deglaze", "Saute"],
		rightAnswer: 2,
	}, {
		number: 3,
		question: "What is it called to cook something by simmering in a small amount of liquid?",
		answers: ["Poach", "Blanch", "Boil", "Sear"],
		rightAnswer: 0,
	}, {
		number: 4,
		question: "Filet Mignon comes from the?",
		answers: ["Chuck", "Shank", "Round", "Loin"],
		rightAnswer: 3,
	}, {
		number: 5,
		question: "The temperature at which oil burns is called what?",
		answers: ["Burn point", "Smoke point", "Fry point", "Melting point"],
		rightAnswer: 1,
	}, {
		number: 6,
		question: "What term means to fry lightly then stew slowly in a closed container?",
		answers: ["Sear", "Saute", "Glaze", "Braise"],
		rightAnswer: 3,
	}, {
		number: 7,
		question: "What is it called to cook briefly in boiling water?",
		answers: ["Boil", "Blanch", "Poach", "Saute"],
		rightAnswer: 1,
	}, {
		number: 8,
		question: "Pesto consists primarily of basil, parmesan, olive oil, and what other ingredient?",
		answers: ["Parsley", "Butter", "Pine nuts", "Lemon"],
		rightAnswer: 2,
	}, {
		number: 9,
		question: "What word means to wrap a roast in fat?",
		answers: ["Bind", "Baste", "Glaze", "Bard"],
		rightAnswer: 3,
	}, {
		number: 10,
		question: "If you were cutting carrots into the size of matchsticks it would be called what?",
		answers: ["Jardiniere", "Chiffonade", "Julienne", "Brunoise"],
		rightAnswer: 2,
	}
];
/* show question, submit to answeQuestion */
function answerQuestion() {
	var question = quiz.question[currentQuestion];

}

function showSummary() {
	$('.summary').show();
	$('.summary h2').text("You got " + score + " out of " + quiz.length + " questions correct!");
	$('.questions-panel').hide();
	$('.question').hide();
	$('.answers').hide();
}

function showQuestion() {
	var questionObj = quiz.question[currentQuestion];
	if (questionObj) {
		$('.question').text(questionObj.question);
		for (i = 0; i < questionObj.answers.length; i++) {
			$('.answer').append(questionObj.answers[i]);
		}
	} else {
		showSummary();
	}
}

})