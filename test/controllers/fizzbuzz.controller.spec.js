var assert = require('assert');
var fizzBuzzController = require('../../controllers/fizzbuzz.controller');

describe('FizzBuzzController', function () {
    describe('getResult', function () {

        //Multipliers of 3 Tests
        var dataMultipleOfThree = [3, 6, 9, 12, 15, 18, 21];
        dataMultipleOfThree.forEach(function (dataItem) {
            var title = 'Should return fizz for multiple of three. Input: ' + dataItem.toString();
            it(title, function () {
                assert.equal("fizz", fizzBuzzController.getResult(dataItem));
            })

        it('Should return buzz for a five', function () {
            assert.equal("buzz", fizzBuzzController.getResult(5));
        })


        //Non multiples of 3 or 5 tests
        var data = [1, 2, 4, 7, 8, 10];
        data.forEach(function (dataItem) {
            var title = 'Should return ' + dataItem.toString() + " when given " + dataItem.toString();
            it(title, function () {
                assert.equal(dataItem.toString(), fizzBuzzController.getResult(dataItem));
            })
        })

    })
})