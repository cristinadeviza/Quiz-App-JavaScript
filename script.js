//Quiz app
const question = new Map([
  ['question', 'What is the best programming languege in the world ?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again..'],
]);
console.log(question);

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt('Your answer'));

console.log(question.get(question.get('correct') === answer));
console.log(answer);
