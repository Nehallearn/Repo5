log = console.log
assert = require('chai').assert;
expect = require('chai').expect
should = require('chai').should()
_ = require('lodash')
log("Yusra go to sleep")
describe('First test', ()=>
{
    let num = 5;
    let str = 'hello';

    it('Check something', ()=>
    {
       assert.isNumber(str);
    })    

it('This is first test', ()=>
{
   true.should.be.true;
})
it('Expect this to be true', ()=>

{

    expect(true).to.be.true;
})

}
)