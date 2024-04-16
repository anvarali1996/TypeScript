interface Sign {
    // [index: string]: string | number | [];
    id: number;
    name: string;
    students: number;
    hona: string;
}

let header2: Sign = {
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

const getData = (i: keyof typeof header2) => {
// const getData = (i: keyof sign) => {
    return header2[i];
};

console.log(getData("hona"));
