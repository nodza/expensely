const add = (a, b) => a + b;
const generateGreeting = (name = 'Nonny') => `Hello ${name}!`;

test('should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test('should return greeting from name', () => {
  const greeting = generateGreeting('Miguel');
  expect(greeting).toBe('Hello Miguel!');
});

test('should return greeting with no name', () => {
  const greeting = generateGreeting();
  expect(greeting).toBe('Hello Nonny!');
});