import sum from '../src/sum.js'

test('should sum of 1 and 2 be 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('should sum of 5 and 7 be 12', () => {
    expect(sum(5, 7)).toBe(12);
});

test('should sum of 5 and -1 be 4', () => {
    expect(sum(5, -1)).toBe(4);
});


test('should sum of 27 and 31 be 58', () => {
    expect(sum(27, 31)).toBe(58);
});

test('should sum of 2.2 and 5.6 be 7.8', () => {
    expect(sum(2.2, 5.6)).toBe(7.8);
});