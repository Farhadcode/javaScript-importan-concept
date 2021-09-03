

const farhan = {
    id: 2407,
    name: 'farhan manud',
    major: 'IPE',
    money: 9990,
    treatDey: function (expense) {
        this.money = this.money - expense;
        console.log(this);
        return this.money;
    },
}