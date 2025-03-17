import * as readline from 'readline';
import { findLCM, getRandomInt } from './features';

// интерфейс для взаимодействия с консолью
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

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