// sum.test.js
import { expect, describe, it} from 'vitest'
import { sum } from './sum'

describe('sum function', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect.assertions(1);
    expect(sum(1,2)).toBe(3)
  })
})