const data = [
    {
        name: 'pawel',
        city: 'krakow',
        age: 38,
        hobbies: ['js', 'python', 'drugs']
    },
    {
        name: 'pawel',
        cite: 'Wroclaw',
        age: 37,
        hobbies: ['js', 'drugs', 'eat']
    },
    {
        name: 'pawel',
        city: 'chelm',
        age: 24,
        hobbies: ['tennis', 'sleep', 'gym']
    },
    {
        name: "iza",
        city: "warsaw",
        age: 28,
        hobbies: ["learning languages", "traveling", "js"]
    },
    {
        name: 'marzena',
        city: 'warsaw',
        age: 31,
        hobbies: ["js", "books", "travelling"],
    },
    {
        name: 'adam',
        city: 'pisz',
        age: 19,
        hobbies: ['guitar', 'gym', 'html']
    },
    {
        name: "kamila",
        city: "gdynia",
        age: 37,
        hobbies: ["diving", "eating", "js"]
    },
    {
        name: 'tomek',
        city: 'zabrze',
        age: 40,
        hobbies: ['paintball']
    },
    {
        name: 'dawid',
        city: 'tarnów',
        age: 23,
        hobbies: ['js', 'beer', 'css']
    },
    {
        name: "olga",
        city: "warszawa",
        age: 34,
        hobbies: ["js", "cats", "swimming"]
    },
    {
        name: 'kasia',
        city: 'warszawa',
        age: 29,
        hobbies: ['programowanie', 'sport']
    }
]

// console.log(data.length);

let sum = 0;

// for (let i = 0; i < data.length; i++){
//     sum += data[i].age
// }

for (const person of data){
    sum += person.age;
}

console.log(sum / data.length)