let a = [1,2,3];
let b = [1,2,3];
let c = "1,2,3";

console.log(a == c);		// true
console.log(b == c);		// true
console.log(a == b);		// false
console.log(JSON.stringify(a)==JSON.stringify(b));		// true
console.log([...a]);
console.log(a.toString() == b.toString(b));         // true

console.log("----------------------------------------");

function makeAdder(x) {
    // параметр `x` - внутренняя переменная

    // внутренняя функция `add()` использует `x`, поэтому
    // у нее есть "замыкание" на нее
    function add(y) {
        return y + x;
    };

    return add;
}

// `plusOne` получает ссылку на внутреннюю функцию `add(..)`
// с замыканием на параметре `x`
// внешней `makeAdder(..)`
var plusOne = makeAdder( 1 );

// `plusTen` получает ссылку на внутреннюю функцию `add(..)`
// с замыканием на параметре `x`
// внешней `makeAdder(..)`
var plusTen = makeAdder( 10 );

plusOne( 3 );		// 4  <-- 1 + 3
plusOne( 41 );		// 42 <-- 1 + 41
plusTen( 13 );		// 23 <-- 10 + 13

console.log("----------------------------------------");

let array1 = [1, 'lkfg', '0', '123', 154, 'sasha', {}];
const array2 = ['d', 'e', 'f'];
console.log(array1.toString());
console.log(array1.concat(array2));
console.log(array1.concat(array1));

console.log(this);

let myName = 'Brandon';
const myNameC = 'Brandon';
console.log(this.myNameC);
console.log(this.myName);
console.log(global.myName);

console.log("----------------------------------------");

let person = {
    first: 'John',
    last: 'Smith',
    full: function() {
        console.log(this.first + ' ' + this.last);
    },
    personTwo: {
        first: 'Allison',
        last: 'Jones',
        full: function() {
            console.log(this.first + ' ' + this.last);
        }
    }
};
person.full();
person.personTwo.full();
console.log("----------------------------------------");

let small = {
    a: 1,
    go: function(b,c,d){
        console.log(this.a+b+c+d);
    }
}
let large = {
    a: 100
}
small.go(2,3,4);
small.go.call(large,2,3,4);
small.go.apply(large,[2,3,4]);
let bindTest = small.go.bind(large,2,3,4);
console.log(bindTest);
bindTest();
let name1 = 'aaa';
console.log();
//this.myNumber = '20';
this.myNumber3;
let myNumber2 = 30;
console.log(this.myNumber);
console.log(myNumber2);
//console.log(global);
console.log("----------------------------------------");
//console.log(small.go(2,3,4));
/*let getContext = function () {
    console.log(this); //log global object
    return this;
};

console.log(getContext() === global); // => true*/

let getContext2 = () => {
    console.log(this); //
    return this;
};

console.log(getContext2()); // => true
console.log("----------------------------------------");

