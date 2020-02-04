'use strict';

const Mult = require('./multiBrk.js');

describe(' Multi Braket Validation' , () =>
{
  it('{} return true' , () =>
  {
    let str = '{}';
    const mm = new Mult(str);
    expect(mm.multiBraket(str)).toBeTruthy();
  });

  it('{}(){} return true' , () =>
  {
    let str = '{}(){}';
    const mm = new Mult(str);
    expect(mm.multiBraket(str)).toBeTruthy();
  });

  it('()[[Extra Characters]] return true' , () =>
  {
    let str = '()[[Extra Characters]]';
    const mm = new Mult(str);
    expect(mm.multiBraket(str)).toBeTruthy();
  });

  it('(){}[[]] return true' , () =>
  {
    let str = '(){}[[]]';
    const mm = new Mult(str);
    expect(mm.multiBraket(str)).toBeTruthy();
  });

  it('{}{Code}[Fellows](()) return true' , () =>
  {
    let str = '{}{Code}[Fellows](())';
    const mm = new Mult(str);
    expect(mm.multiBraket(str)).toBeTruthy();
  });

  it('[({}] return false' , () =>
  {
    let str = '[({}]';
    const mm = new Mult(str);
    expect(mm.multiBraket(str)).toBeFalsy();
  });

  it('(](	 return false' , () =>
  {
    let str = '(](';
    const mm = new Mult(str);
    expect(mm.multiBraket(str)).toBeFalsy();
  });

  it('{(}) return true' , () =>
  {
    let str = '{(})';
    const mm = new Mult(str);
    expect(mm.multiBraket(str)).toBeTruthy();
  });
}); // end of multi testing 