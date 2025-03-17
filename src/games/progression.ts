import * as readline from 'readline';
import { generateProgression, getRandomInt } from './features';

// интерфейс для взаимодействия с консолью
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export default function askProgression(name: string, round: number, rounds: number) {
  if (round >= rounds) {
    console.log(`Congratulations, ${name}!`);
    rl.close();
    return;
  }

  const progressionLength = getRandomInt(5, 11);
  const start = getRandomInt(1, 10);
  const ratio = getRandomInt(2, 6);

  const progression = generateProgression(start, ratio, progressionLength);

  const hiddenIndex = getRandomInt(0, progressionLength);

  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = NaN;

  const progressionWithDots = progression.map((num) => (Number.isNaN(num) ? '..' : num)).join(' ');
  console.log(`Question: ${progressionWithDots}`);

  rl.question('Your answer: ', (userInput) => {
    const userAnswer = Number(userInput);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      askProgression(name, round + 1, rounds);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      rl.close();
    }
  });
}
