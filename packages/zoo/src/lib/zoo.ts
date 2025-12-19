import { getRandomAnimal } from '@monorepo-example/animal';

export function zoo(): string {
  const result = getRandomAnimal();
  return `${result.name} says ${result.sound}!`;
}