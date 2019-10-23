function f() {
    console.log(this); // ?
}

let user = {
    g: f.bind(null)
};
console.log('------------------');
user.g();
console.log('------------------');

function execute() {
    // 'use strict'; // activate the strict mode

    function concat(str1, str2) {
        // the strict mode is enabled too
        //console.log(this === undefined); // => true
        console.log(this === global); // => true
        return str1 + str2;
    }

    // concat() is invoked as a function in strict mode
    // this in concat() is undefined
    console.log(concat('Hello', ' World!'));
}

execute();
console.log('------------------');
console.log(
    ['Hello', 'World'].join(', ') // method invocation
);
console.log(
    ({
        ten: function () {
            return 10;
        }
    }).ten() // method invocation
);
var obj = {};
obj.myFunction = function () {
    return new Date().toString();
};
console.log(
    obj.myFunction() // method invocation
);

var otherFunction = obj.myFunction;
console.log(otherFunction());     // function invocation
console.log(parseFloat('16.60')); // function invocation
console.log(isNaN(0));            // function invocation
console.log('------------------');

function Animal(type, legs) {
    this.type = type;
    this.legs = legs;
    this.logInfo = function () {
        console.log(this === myCat); // => false
        console.log('The ' + this.type + ' has ' + this.legs + ' legs');
    };
}

let myCat = new Animal('Cat', 4);
console.log(myCat.type);
console.log(myCat.logInfo());
// logs "The undefined has undefined legs"
// or throws a TypeError, in strict mode
//метод отделяется от объекта, когда передаётся в качестве параметра: setTimout(myCat.logInfo)
//logInfo вызывается как функция
setTimeout(myCat.logInfo, 1000);
console.log('------------------');

function Animal(type, legs) {
    this.type = type;
    this.legs = legs;
    this.logInfo = function () {
        console.log(this === myDog); // => true
        console.log('The ' + this.type + ' has ' + this.legs + ' legs');
    };
}

var myDog = new Animal('Dog', 4);
// logs "The Cat has 4 legs"
setTimeout(myDog.logInfo.bind(myDog), 1000);

