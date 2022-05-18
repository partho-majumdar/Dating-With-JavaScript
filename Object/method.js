var obj = { x: 11, y: 22, z: 33 };

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

/* Create duplicate object */

let obj2 = Object.assign({}, obj);
obj2.y = 69;

console.log(obj2);
