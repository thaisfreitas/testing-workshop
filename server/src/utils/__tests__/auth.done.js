/* eslint-disable jest/no-focused-tests */
// eslint-disable-next-line import/named
import {userToJSON, isPasswordAllowed} from '../auth'

// eslint-disable-next-line jest/prefer-todo
test('isPasswordAllowed only allows some passwords', () => {
  const userPassword = '123456A'
  const expectedPassword = isPasswordAllowed(userPassword)

  expect(expectedPassword).toBe(true)
})

test('userToJSON excludes secure properties', () => {
  const expectedUser = {
    id: '123',
    username: 'sarah',
    exp: new Date(),
    iat: new Date(),
    hash: 'some really long string',
    salt: 'some shorter string',
  }

  const receivedUser = userToJSON(expectedUser)
  expect(receivedUser).toEqual({
    id: '123',
    username: 'sarah',
  })
})

test('I submitted my elaboration and feedback', () => {
  const submitted = true
  expect(submitted).toBe(true)
})
