// object 
const student = {
    id: 2407,
    name: 'farhan manud',
    major: 'IPE',
    money: 9990,
    subjects: ['math', 'economics', 'industril low', 'supply chin'],
    bestFriend: {
        name: 'mukta',
        major: 'finance',
        varsity: 'jun'
    },
    mornigTurne: function () {
        console.log('Good Morning', this.bestFriend.name);
    },

    treatDey: function (expense, boksis) {
        this.money = this.money - expense - boksis
        return this.money;
    },
}

student.mornigTurne();

const remainig1 = student.treatDey(899, 80);
const remainig2 = student.treatDey(600, 50)
console.log(remainig1);
console.log(remainig2);