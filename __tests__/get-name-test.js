const getName = require('../utils/get-name');

describe('getName', () => {
  it('Should call back the name and name only of the object', () => {
    const alex = { name: 'Alex', age: 21, height: '130 lbs' };
    
    const names =  getName(alex);

    expect(names).toEqual('Alex');
  });
});
