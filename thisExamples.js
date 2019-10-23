//this.name1 = 'glooooobalName';
let car = {
    age: 25,
    name1: 'alex',
    opt: () => {
        console.log(this.name1);
    }
};
//(function () {car.opt()})();
car.opt(); //undefined

let car2 = {
    age: 25,
    name1: 'xaxaxa',
    opt: function() {
        console.log(this.name1);
        //return this.name1;
    }
};
car2.opt();    //xaxaxa

console.log("///////////////////////////////");


let getContext = function () {
    console.log(this); // => global object
    return this;
};
getContext(); // => global object
console.log(getContext() === global); // => true


console.log("----------------------------------------");

let getContext2 = () => {
    //this.color = 'black';
    console.log(this); // => {}
    return this;
};
getContext2();     // => {}


console.log("----------------------------------------");


let getContext3 = () => {
   // this.color = 'black';
    console.log(this);    // => { color: 'black' }
};
getContext3();     // => { color: 'black' }


console.log("///////////////////////////////");

console.log(this);  // => {} - особенность JS

(function() {
    console.log(this);    // => global
})();
console.log("///////////////////////////////");
const drinks = [
    {
        name: 'Coffee',
        addictive: true,
        info: function() {
            console.log(`${this.name} is ${this.addictive ? '' : 'not '} addictive.`)
        },
    },
    {
        name: 'Celery Juice',
        addictive: false,
        info: function() {
            console.log(`${this.name} is ${this.addictive ? '' : 'not '} addictive.`)
        },
    },
]

/*function pickRandom(arr) {
    let index = arr[Math.floor(Math.random() * arr.length)];
    return index;
}*/

drinks[0].info();   // => coffee is adictive
drinks[1].info();   // => Celery Juice is not adictive

console.log("///////////////////////////////");

class Viking {
    constructor(name) {
        this.name = name
    }

    prepareForBattle(increaseCount) {
        console.log(`I am ${this.name}! Let's go fighting!`)
        increaseCount()
    }
}

class Battle {
    constructor(vikings) {
        this.vikings = vikings
        this.preparedVikingsCount = 0
        this.increaseCount = this.increaseCount.bind(this);

        this.vikings.forEach(viking => {
            viking.prepareForBattle(this.increaseCount)
        })
    }

    increaseCount() {
        this.preparedVikingsCount++
        console.log(`${this.preparedVikingsCount} vikings are now ready to fight!`)
    }
}

const vikingOne = new Viking('Olaf');
const vikingTwo = new Viking('Odin');

new Battle([vikingOne, vikingTwo]);
console.log("///////////////////////////////");

class Salad {
    constructor(type) {
        this.type = type
    }
}
function showType() {
    console.log(`The context's type is ${this.type}`);
}
const fruitSalad = new Salad('fruit');
const greekSalad = new Salad('greek');
showType.call(fruitSalad); // The context's type is fruit
showType.call(greekSalad); // The context's type is greek
showType(); // The context's type is undefined




