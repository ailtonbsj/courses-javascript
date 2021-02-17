let fizzbuzz = (val) => {
  if (val % 5 === 0 && val % 3 === 0) return 'FizzBuzz'
  if (val % 5 === 0) return 'Buzz'
  if (val % 3 === 0) return 'Fizz'
  return val
}

export {
  fizzbuzz
}