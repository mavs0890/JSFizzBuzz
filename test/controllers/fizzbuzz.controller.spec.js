var assert = require('assert');
var fizzBuzzController = require('../../controllers/fizzbuzz.controller');

describe('FizzBuzzController',function(){
    describe('isReady',function(){
        
        it('Should return fizz for a three', function(){
            assert.equal("fizz",fizzBuzzController.getResult(3));
        })

        it('Should return buzz for a five', function(){
            assert.equal("buzz",fizzBuzzController.getResult(5));
        })

        it('Should return one for a one', function(){
            assert.equal("1",fizzBuzzController.getResult(1));
        })

        it('Should return two for a two', function() {
            assert.equal("2",fizzBuzzController.getResult(2));
        })
    })
})