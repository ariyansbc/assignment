

//kiloMeterToMeter
function kilometerTometer(kilo) {
    let  oneKilo = 1000, meter;
    if(kilo>=0) {
         meter = kilo * oneKilo;
        return kilo + ' kiloMeters'+ ' = ' + meter + ' meters'; 
    }
    else {
        return `Distance can't be negative`;
    }  
}

// //budgetCalculator
function budgetCalculator(watch, mobile, laptop) {

    let watchPrice=50, mobilePrice=100, laptopPrice=500, watchCost, mobileCost,laptopCost, totalCost;

    if(watch >= 0 && mobile >=0 && laptop >=0) {
         watchCost = watchPrice * watch;
         mobileCost = mobilePrice * mobile;
         laptopCost = laptopPrice * laptop;
         totalCost = watchCost + mobileCost + laptopCost;
        return 'total budget cost: ' + totalCost + '\nWatch cost: ' + watchCost + '\nMobileCost: ' + mobileCost + '\nlaptopCost: '+ laptopCost;
    }
    else {
        return `Value can't be negative!`
    }
}

//hotelCost

function hotelCost(days) {

    let totalCost, firstCost, offer, remaining,costForOffer,secondCost,thirdCost;

    if(days >=0) {
         if(days <=10) {
            totalCost = 100 * days;
            return  days + ' days hotelcost: ' + totalCost;
        }
        else if(days <=20) {
             firstCost = 100 * 10;
             offer = 20;
             costForOffer = 100 - offer;
             remaining = days - 10;
             secondCost = remaining * costForOffer;
             totalCost = firstCost + secondCost;
             return  days + ' days hotelcost: ' + totalCost;
        }
        else {
             firstCost = 100 * 10 ;
             secondCost = (100-20) * 10;
             offer = 50;
             costForOffer = 100 - offer;
             remaining = days - 20;
             thirdCost = remaining * costForOffer;
             totalCost = firstCost + secondCost + thirdCost;
             return  days + ' days hotelcost: ' + totalCost;
        }
    }
    else {
        return `Day can't be negative!`;
    }
}

//megaFriend

function megaFriend(friends) {

    if(!friends.length) {
        return 'Array is empty';
    }
    else {
        var mega = friends[0];
        for(let i = 0 ; i < friends.length ; i++) {
            var getFriend = friends[i];
        if(getFriend.length > mega.length ){
            mega = getFriend;   
          }
      }
        return 'Your mega friendName: ' + mega;
    }  
 }

 console.log(kilometerTometer(5));
 console.log(hotelCost(15));
 console.log(budgetCalculator(10,12,0));
 console.log(megaFriend(['jalal','ahmed','jubayer','muhidulIslam','anowar']));