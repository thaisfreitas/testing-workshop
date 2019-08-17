// import {
//   sum,
//   subtract
// } from '../whats-a-test/1';
// the most fundamental test

/*

write a test that reveals the bug.
Write code that throws an error with a helpful message about the bug,
but only if there's a bug.
So... if (calling sum with some numbers doesn't return the right thing) {
  then throw an error with a helpful message
}

Then run this code with `node 1.todo`

> Make sure you're in the right directory!

Bonus, write another test that would throw an
error if the subtract function were to have a bug

*/

// sum is intentionally broken so you can see errors in the tests
const sum = (a, b) => a - b
const subtract = (a, b) => a - b

test('calling sum with some numbers does not return the right thing', () => {
  expect(sum(10, 4)).toThrowError('The method is returning the wrong result... Fix it!');
  expect(sum(10, 4)).toThrowError('node 1.todo');
});

test('throw an error message if the subtract function were to have a bug  ', () => {
  const result = sum(6, 4);
  expect(3).toThrowError('node 1.todo');
})