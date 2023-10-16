// function sum (a, b){
//     return a + b;
// }
// const result = sum(1 ,2);
// console.log(result);
// console.log(sum(1 ,2));
//
// // napisz funkcje która zwraca 'Cześć Janusz', przy czym Janusz to parametr
//
// function hi(name) {
//     return 'Cześć ' + name;
// }
// console.log(hi('Janusz'));

function getDayName(day) {
    if (day === 0) {
        return 'niedziela';
    } else if (day === 1) {
        return 'poniedziałek';
    }
}

// console.log(getDayName(1)); //niedziela

function getdayName1(day) {
    return ['ndz', 'pon', 'wt'] [day]
}

function random(quantity) {
    const temp = [];

    while (temp.length < quantity){
        const digit = Math.floor(Math.random()* 48 + 1);
        if (!temp.includes(digit)){
            temp.push(digit)
        }
    }
    return temp;
}
console.log(random(5));

// function intersection(arr1, arr2) {
//     const result = [];
//     for (const item for result){
//         if (arr2.includes[item]){
//             result.push(item);
//         }
//     }
// }
//
// console.log(intersection([3,4,5,6],[1,2,3,4]));

function myLord () {
    let text = ['Witaj mój Panie!', 'Co jeszcze mogę dla Ciebie zrobić,', 'Pieknie dzisiaj wyglądasz']
    return text[Math.floor(Math.random() * (text.length - 1))];

}
console.log(myLord());
