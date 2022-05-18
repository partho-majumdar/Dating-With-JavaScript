let point = { x: 10, y: 20, z: 30 };

point.x = 11;
point["y"] = 22;
let newZ = "z";
point[newZ] = 33;

console.log(point);
