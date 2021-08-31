const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 99,
    isCleaned: true,
};

for (let i = 0; i < 10; i++) {

}
// use array or array like object forfo
// for (const iterator of object) {} // array
// for(const prop in bottle){} // object

for (const prop in bottle) {
    //console.log(prop, bottle[prop]);
}
const values = Object.values(bottle);
//console.log(values);
const keys = Object.keys(bottle);
//console.log(keys);

// advanced

// const entries = Object.entries(bottle);
// console.log(entries);
// const [key, value] = ['color', 'yellow'];

for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value);
}