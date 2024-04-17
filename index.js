// function getData(a:number, b: number) {
//     return a ** b;
// }
function getData(prop) {
    prop();
}
var fun = function () {
    console.log("fun is working");
    return 123;
};
fun.title = "Anvarjon";
console.log(getData(fun));
