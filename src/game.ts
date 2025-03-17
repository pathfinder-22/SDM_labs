import * as readline from 'readline';
import askLCM from './games/lcm';
import askProgression from './games/progression';

// интерфейс для взаимодействия с консолью
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export default function play(): void {
  const rounds = 3;
  console.log('Welcome to the Brain Games!');

  rl.question('May I have your name? ', (name) => {
    console.log(`Hello, ${name}!`);
    rl.question('Choose a game: Enter 1 for LCM or 2 for Progression: ', (choice) => {
      if (choice === '1') {
        console.log('You chose the LCM game!');
        console.log('Find the smallest common multiple of given numbers.');
        askLCM(name, 0, rounds);
      } else if (choice === '2') {
        console.log('You chose the Progression game!');
        console.log('Find the missing element in Geometric Progression.');
        askProgression(name, 0, rounds);
      } else {
        console.log('Invalid choice. Game not found.');
        rl.close();
      }
    });
  });
}
