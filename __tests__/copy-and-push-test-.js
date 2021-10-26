

describe('copyAndPush', () => {
  it('Should return a new Array with all items in original and new, pushed item', () => {
    const numbers = [1, 2, 3, 4];

    copyAndPush(numbers, 5);

    expect(numbers).toEqual([1, 2, 3, 4, 5]);
  });
});
