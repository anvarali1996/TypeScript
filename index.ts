// function getData(a:number, b: number) {
//     return a ** b;
// }

// console.log(getData(4, 2));

type Prop = {
    title: string;
    (): number;
}

function getData(prop:Prop) {
    prop()
}

const fun = () => {
    console.log("fun is working");
    return 123;
}
fun.title = "Anvarjon";
console.log(getData(fun));
