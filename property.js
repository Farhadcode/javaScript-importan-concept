const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 99,
    isCleaned: true,
};
// objet keys 
const kyes = Object.keys(bottle)
//console.log(kyes);
// object values
const values = Object.values(bottle);
//console.log(values);

const pairs = Object.entries(bottle);

// seal ar poray kon delete or add cholbay na 

Object.seal(bottle);

//freeze ar poray kon kiso kora jabay na full not extanal work in object
Object.freeze(bottle);

// add new property in object
bottle.height = 16;

// delete any propertay in object 
delete bottle.isCleaned;

console.log(bottle);