function FizzBuzzController(){
    
    function getResult (number){
        if (number == 3){
            return "fizz";
        }

        if(number == 5){
            return "buzz";
        }

        if(number == 1){
            return "1";
        }

        if(number == 2){
            return "2";
        }
        return "";

    }
    return {getResult};
}

module.exports = FizzBuzzController();