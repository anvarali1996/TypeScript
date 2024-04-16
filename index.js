var header2 = {
    id: 1,
    name: "Sattor",
    hona: "X-7",
    students: 123,
};
// let header1: sign = {
//     id: 1,
//     name: "Gani",
//     schedule: "Algebry",
//     students: 123,
//     moderaor: "Alex",
// };
var getData = function (i) {
    // const getData = (i: keyof sign) => {
    return header2[i];
};
console.log(getData("hona"));
