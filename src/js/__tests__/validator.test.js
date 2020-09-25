import Validator from '../validator'

test('should be truthy', () => {
  expect(new Validator('Вася').validateUsername()).toBeTruthy()
})

test('should be falsy', () => {
  expect(new Validator('T').validateUsername()).toBeFalsy()
})

test('should be falsy', () => {
  expect(new Validator(23).validateUsername()).toBeFalsy()
})
