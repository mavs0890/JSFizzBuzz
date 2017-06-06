var assert = require('assert');
var fizzBuzzController = require('../../controllers/fizzbuzz.controller');

describe('FizzBuzzController', function () {
    describe('getResult', function () {

        //Multipliers of 3 tests
        var dataMultipleOfThree = [3, 6, 9, 12, 18, 21];
        dataMultipleOfThree.forEach(function (dataItem) {
            var title = 'Should return fizz for multiple of three. Input: ' + dataItem.toString();
            it(title, function () {
                assert.equal("fizz", fizzBuzzController.getResult(dataItem));
            })
        })

        //Multipliers of 5 tests
        var dataMultipleOfFive = [5, 10, 20, 25];
        dataMultipleOfFive.forEach(function (dataItem) {
            var title = 'Should return buzz for a multiple of five. Input: ' + dataItem.toString();
            it(title, function () {
                assert.equal("buzz", fizzBuzzController.getResult(dataItem));
            })
        })



        //Non multiples of 3 or 5 tests
        var data = [1, 2, 4, 7, 8];
        data.forEach(function (dataItem) {
            var title = 'Should return ' + dataItem.toString() + " when given " + dataItem.toString();
            it(title, function () {
                assert.equal(dataItem.toString(), fizzBuzzController.getResult(dataItem));
            })
        })
    })
})


