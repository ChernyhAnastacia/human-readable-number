module.exports = function toReadable (number) {
    var numberInWord = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
    var numberInWordTen = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    if (number <= 20) {
        return numberInWord[number]
    } else if (number >= 21 && number < 100) {
        var firstNumberDozen = Math.floor(number / 10);
        var secondNumberDozen = number.toString()[1];
        if(secondNumberDozen == 0){
            return (numberInWordTen[firstNumberDozen - 2])
        } else{
            return (numberInWordTen[firstNumberDozen - 2] + ' ' + numberInWord[secondNumberDozen])
        }
    } else if (number >= 100 && number < 1000) {
        var firstNumberInHundred = number.toString()[0];

        var secondNumberInHundred = number.toString()[1];

        var thirdNumberInHundred = number.toString()[2]



        if(secondNumberInHundred == 0 && thirdNumberInHundred == 0){
            return (numberInWord[firstNumberInHundred]+ ' hundred')
        } else if (secondNumberInHundred == 0) {
            return (numberInWord[firstNumberInHundred] + ' hundred ' + numberInWord[thirdNumberInHundred])
        }
        else if (secondNumberInHundred == 1) {
            return (numberInWord[firstNumberInHundred] + ' hundred ' + numberInWord[secondNumberInHundred+thirdNumberInHundred])
        }
        else if (thirdNumberInHundred == 0) {
            return (numberInWord[firstNumberInHundred] + ' hundred ' + numberInWordTen[secondNumberInHundred - 2])
        }
        else {
            return (numberInWord[firstNumberInHundred] + ' hundred ' + numberInWordTen[secondNumberInHundred - 2] + ' ' + numberInWord[thirdNumberInHundred])
        }
    }

}
