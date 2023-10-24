'use strict';

console.log(this);

function magic() {
    console.log(this);
}

magic();
magic.call({age:  42});
magic.call({name: 'Janusz'});
