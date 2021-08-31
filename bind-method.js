const farhan = {
    id: 2407,
    name: 'farhan manud',
    major: 'IPE',
    money: 9990,
    treatDey: function (expense) {
        this.money = this.money - expense
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

farhan.treatDey(190);
farhan.treatDey(900)
const heroTreatDey = farhan.treatDey.bind(heroAlom);
heroTreatDey(2000);

heroTreatDey(200);
const BoosTreatDay = farhan.treatDey.bind(boosBabu);
BoosTreatDay(1200);