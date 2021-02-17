import { expect } from 'chai'
import { fizzbuzz } from '../fizzbuzz'

describe('FizBuzz', () => {
  it('should return Fizz when enter 6', () => {
    expect(fizzbuzz(6)).to.equal('Fizz')
  })

  it('should return Buzz when enter 10', () => {
    expect(fizzbuzz(10)).to.equal('Buzz')
  })

  it('should return Fizzbuzz when enter 15', () => {
    expect(fizzbuzz(15)).to.equal('FizzBuzz')
  })

  it('should return 7 when enter 7', () => {
    expect(fizzbuzz(7)).to.equal(7)
  })
})