const btnRef = document.querySelector('form button[type = "submit"]');
const inputRefs = [...document.querySelectorAll('form input[id^="digit-"]')];
const resultRef = document.querySelector('#results');


const isNotEmpty = (value) => value.trim() !== '';
const isNotAllEmpty = (inputs) => inputs.every(isNotEmpty);

const isInteger = (value) => !isNaN(parseInt(value));
const isAllInteger = (inputs) => inputs.every(isInteger);

const isInRange = (value) => value >= 1 && value <= 49;
const isAllInRange = (inputs) => inputs.every(isInRange);

const isNotRedundant = (digits) => digits.length === new Set(digits).size;

const drawDigits = (amount = 6) => {
    const temp = [];

    while (temp.length < amount) {
        const digit = Math.floor(Math.random () * 48 + 1);
        if (!temp.includes(digit)){
            temp.push(digit);
        }
    }
    return temp;
}

const checkHits = (userDigits, drawnDigits) => {
    const hits = [];
    for (const digit of userDigits){
        if (drawnDigits.includes(digit)){
            hits.push(digit);
        }
    }
    return hits;
}

const showResult = (hits) => {
    let message = '';
    if (hits.length === 0){
        message += 'Spróbuj jeszcze raz. 90% hazardzistów poddaje się przed wygraniem fortuny'
    } else {
        message += `Wygrałeś! trafiłeś ${hits.length} liczb. Twoje liczby to ${hits.join(", ")}.`
    }

    resultRef.innerText = message;
}


btnRef.addEventListener('click', function(event){
    event.preventDefault();
    const values = inputRefs.map((input) => input.value);

    if (isNotAllEmpty(values)){
        if (isAllInteger(values)){
            const digits = values.map((value) => parseInt(value));
            if (isAllInRange(digits)){
                if (isNotRedundant(digits)){
                    const drawnDigits = drawDigits();
                    const hits = checkHits(digits, drawnDigits);
                    showResult(hits);
                } else {
                    console.log('Powtarzasz liczby');
                }
            }else {
                console.log('są liczby spoza zakresu');
            }
        } else {
            console.log('to nie liczby');
        }
    } else {
        console.log("pola są puste");
    }
});

