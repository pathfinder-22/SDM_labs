import * as readline from 'readline';

// интерфейс для взаимодействия с консолью
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

function lcm(a: number, b: number): number {
  return (a * b) / gcd(a, b);
}

function findLCM(numbers: number[]): number {
  return numbers.reduce((acc, cur) => lcm(acc, cur), 1);
}

function askLCM(name: string, round: number, rounds: number) {
  if (round >= rounds) {
    console.log(`Congratulations, ${name}!`);
    rl.close();
    return;
  }

  const numbers = [getRandomInt(1, 10), getRandomInt(1, 10), getRandomInt(1, 10)];
  const correctAnswer = findLCM(numbers);

  console.log(`Question: ${numbers.join(' ')}`);

  rl.question('Your answer: ', (userInput) => {
    const userAnswer = Number(userInput);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      askLCM(name, round + 1, rounds);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      rl.close();
    }
  });
}

function generateProgression(start: number, ratio: number, length: number): number[] {
  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start * Math.pow(ratio, i));
  }
  return progression;
}

function askProgression(name: string, round: number, rounds: number){
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

  const progressionWithDots = progression.map(num => isNaN(num) ? '..' : num).join(' ');
  console.log(`Question: ${progressionWithDots}`);

  rl.question("Your answer: ", (userInput) => {
    const userAnswer = Number(userInput);

    if (userAnswer === correctAnswer) {
      console.log("Correct!");
      askProgression(name, round + 1, rounds);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      rl.close();
    }
  });
}

export default function play(): void {
  const rounds = 3;
  console.log('Welcome to the Brain Games!');

  rl.question('May I have your name? ', (name) => {
    console.log(`Hello, ${name}!`);
    rl.question('Choose a game: Enter 1 for LCM or 2 for Progression: ', (choice) => {
      if (choice === '1') {
        console.log('You chose the LCM game!');
        console.log('Find the smallest common multiple of given numbers.');
        askLCM(name, 0, rounds); // Вызываем функцию для игры с НОК
      } else if (choice === '2') {
        console.log('You chose the Progression game!');
        console.log("Find the missing element in Geometric Progression.");
        askProgression(name, 0, rounds); // Вызываем функцию для игры с прогрессией
      } else {
        console.log('Invalid choice. Game not found.');
        rl.close();
      }
    });
  });
}
