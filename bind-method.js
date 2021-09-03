const farhan = {
    id: 2407,
    name: 'farhan manud',
    major: 'IPE',
    money: 9990,
    treatDey: function (expense, boksis, tax) {
        this.money = this.money - expense - boksis - tax;
        console.log(this);
        return this.money;
    },
}


const heroAlom = {
    id: 102,
    money: 10000,
    name: 'Hero Alom'
}
const boosBabu = {
    id: 102,
    money: 7000,
    name: 'Boos Babu'
}

farhan.treatDey(190, 10, 0);
farhan.treatDey(900, 80, 20)
const heroTreatDey = farhan.treatDey.bind(heroAlom);
heroTreatDey(2000, 150, 50);

heroTreatDey(200, 20, 0);
const BoosTreatDay = farhan.treatDey.bind(boosBabu);
BoosTreatDay(1200, 100, 20);


// call() method use 
/*syntax
call()
call(thisArg)
call(thisArg, arg1)
call(thisArg, arg1, arg2)
call(thisArg, arg1, ... , argN)
*/

farhan.treatDey.call(heroAlom, 788, 99, 70)
farhan.treatDey.call(farhan, 900, 80, 20)

/*
apply() method
syntax
apply(thisArg)
apply(thisArg, argsArray)
*/

farhan.treatDey.apply(heroAlom, [500, 400, 100]);
farhan.treatDey.apply(farhan, [800, 150, 50]);

