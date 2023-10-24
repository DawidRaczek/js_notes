// function expression -> przypisanie deklaracji fn do zmiennej

const doSmth = () => {
};
const doSmth1 = function () {
};
const doSmth2 = function name() {
}; // nie rób tak

// wariancje zapisu

//parametry

const x = () => {
}
const x2 = a => {
} // nie rób tak bo niezgodne z guideline

const x3 = (a, b) => {
}

//ciało funkcji

const x4 = () => {
}
const x5 = () => 42 // implicit return (niejawne)

//funkcja max, która zwraca największy podany argument

// const max = (...digits) => {
//     let highest = digits[0];
//
//     for (const digit of digits.slice(1)){
//         if (digit > highest){
//             highest = digit;
//         }
//     }
//     return highest;
// }
//
// console.log(max(1, 2, 3, 4, 5, 7, 1, 5, 12, 4));


// przyjmij obiekt z imieniem i wiekiem i zwróć nowy obiekt, w którym będzie jeszcze klucz active

const changeStatus = (person) => ({...person, status: 'active'})

const user = {name: 'Janusz', age: 34}
console.log(changeStatus(user));