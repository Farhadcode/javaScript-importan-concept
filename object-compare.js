const first = { a: 2, b: 4 };
const second = { b: 4, a: 2 };
const second1 = { b: 4, a: 2, c: 5 };
const third = first;
if (first === third) {
    //console.log('object are equal');
}
else {
    //console.log('object are different');
}

console.log(JSON.stringify(first));
console.log(JSON.stringify(second));
if (JSON.stringify(first) === JSON.stringify(second1)) {
    console.log('object are equal');
}
else {
    console.log('object are different');
}

function compareObjects(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (const prop in obj1) {
        if (obj1[prop] !== obj2[prop]) {
            return false;
        }
    }
    return true;
}
const isEqual = compareObjects(first, second1);
console.log(isEqual);