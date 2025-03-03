import * as readline from 'readline';

// Создаем интерфейс для взаимодействия с консолью
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

function lcm(a: number, b: number): number {
  return (a * b) / gcd(a, b);
}

export function findLCM(numbers: number[]): number {
  return numbers.reduce((acc, curr) => lcm(acc, curr));
}

export function playGame(): void {
  console.log("Welcome to the Brain Games!");

  rl.question("May I have your name? ", (name) => {
    console.log(`Hello, ${name}!`);
    
    console.log("Find the smallest common multiple of given numbers.");
    const questions = [
      [5, 7, 15],
      [100, 50, 1],
      [3, 9, 27]
    ];
    
    let index = 0;

    const askQuestion = () => {
      if (index < questions.length) {
        const numbers = questions[index];
        console.log(`Question: ${numbers.join(" ")}`);

        rl.question("Your answer: ", (userInput) => {
          const userAnswer = Number(userInput);
          const correctAnswer = findLCM(numbers);

          if (userAnswer === correctAnswer) {
            console.log("Correct!");
            index++;
            askQuestion();  // Переходим к следующему вопросу
          } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            rl.close();
          }
        });
      } else {
        console.log(`Congratulations, ${name}!`);
        rl.close();
      }
    };

    askQuestion();
  });
}
