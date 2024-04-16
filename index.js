// interface someThing {
//     id: number,
//     name: string,
//     status: string,
//     birthYear: number | string,
//     students: number | string[];
// }
// let obj: someThing = {
//     id: 1,
//     name: "Anvarjon",
//     status: "married",
//     birthYear: 1996,
//     students: [],
// }
// console.log(obj.birthYear);
//  Non-premetive object is changeing it's value
// let obj1 = { name: "Front-end Developer" };
// let obj2 = obj1;
// obj2.name = "Backend Developer";
// console.log(obj1);
function getData(prop) {
    console.log(prop.name);
}
getData({ name: "Good afternoon!!!" });
