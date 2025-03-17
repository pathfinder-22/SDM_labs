export function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

// lcm features
export function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

export function lcm(a: number, b: number): number {
  return (a * b) / gcd(a, b);
}

export function findLCM(numbers: number[]): number {
  return numbers.reduce((acc, cur) => lcm(acc, cur), 1);
}

// progression features
export function generateProgression(start: number, ratio: number, length: number): number[] {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start * (ratio ** i));
  }
  return progression;
}
