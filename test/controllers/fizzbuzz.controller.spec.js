var assert = require('assert');
var fizzBuzzController = require('../../controllers/fizzbuzz.controller');

describe('FizzBuzzController', function () {
    describe('getResult', function () {

        it('Should return fizz for a three', function () {
            assert.equal("fizz", fizzBuzzController.getResult(3));
        })

        it('Should return buzz for a five', function () {
            assert.equal("buzz", fizzBuzzController.getResult(5));
        })

        var data = [1, 2, 4, 7, 8, 10];
        data.forEach(function (dataItem) {
            var title = 'Should return ' + dataItem.toString() + " when given " + dataItem.toString();
            it(title, function () {
                assert.equal(dataItem.toString(), fizzBuzzController.getResult(dataItem));
            })
        })

    })
})