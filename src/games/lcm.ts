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

export default function askLCM(name: string, round: number, rounds: number) {
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