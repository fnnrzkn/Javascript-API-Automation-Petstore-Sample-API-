const assert = require('chai').assert;
const app= require('../../assert')

//Asserting
//Inilah cara assert menggunakan chai
describe ("welcome Test", function (){
    it('app should return welcome message', function (){
        assert.equal(app(),"welcome to java api automation test pet store api")
    })
})