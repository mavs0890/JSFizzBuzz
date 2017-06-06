function FizzBuzzController(){
    
    function getResult (number){
        if (number % 3 == 0){
            return "fizz";
        }

        if(number == 5){
            return "buzz";
        }


        return number.toString();

    }
    return {getResult};
}

module.exports = FizzBuzzController();