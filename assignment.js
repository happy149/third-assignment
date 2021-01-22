
//first problem

kilometerToMeter

function kilometerToMeter(kilometer) {
    var meter = kilometer/1000;
    return meter;
}
/*
 var aliaMeter = kilometerToMeter(20);
console.log(aliaMeter);

0.02 

 var ayeshaMeter = kilometerToMeter(50);
console.log(ayeshaMeter);

 0.05 */



//second problem


 budgetCalculator

function budgetCalculator(watch, phone ,laptop) {
    var total = watch+phone+laptop;
    return total;
    
}
var sum = budgetCalculator( 50,100,500);
console.log(sum);

650




//Third problem

hotelCost

function hotelCost(day) {
    var price = 0;
    if(day<=10){
        price = day*100;
    }
    else if(day<=20){
        var firstPart = 10*100;
        var remaining = day - 10;
        var secondPart = remaining*80;
        price = firstPart + secondPart;
    }
    else{
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = day -20;
        var thirdpart = remaining * 50;
        price = firstPart + secondPart + thirdpart;
    }
    return price;
}

//650
/*
var cost = hotelCost (30);
console.log (cost);
2300


var total = hotelCost (71);
console.log (total);
4350 */


 //Forth problem


 megaFriend

 var megaFriend = ['ayesha','alia','tareq','happy','hosneara'];
 var Max = megaFriend[0];
 for(var i = 0; i < megaFriend.length; i++){
     var word = megaFriend[i];
     if( word.length > Max.length) {
         Max = word;
     }
 }
//console.log("Largest name is : " + Max);
// Largest name is hosneara