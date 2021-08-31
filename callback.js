function welcomeMessage(name, greetHanlar) {
    console.log(greetHanlar);
    greetHanlar(name);
}
const names = ['Tom Hanks', 'Tom Brady', 'Tom Cruise']
const myObj = { name: 'Tom chinku', age: 11 };

function greetMorning(name) {
    console.log('Good morning', name);
}

welcomeMessage('Yongdy Ghog', greetMorning);