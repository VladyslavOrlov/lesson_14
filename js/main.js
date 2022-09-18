let counter = (function() {
  let count = 0;

  return function (num) {
    count = num === undefined ? count : num;

    return count++;
  }
}
());

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter(100)); // 100
console.log(counter()); // 101
console.log(counter(500)); // 500
console.log(counter()); // 501
console.log(counter(0)); // 0
console.log(counter()); // 1


let counting = (function () {
  let count = 0;

  return {
    value(num) {
      if (num !== undefined) count = num;

      return count;
    },
    decrement() {
      count--;
    },
    increment() {
      count++;
    }
  };
}());

console.log(counting.value()); // 0
counting.increment();
counting.increment();
counting.increment();
console.log(counting.value()); // 3
counting.decrement();
counting.decrement();
console.log(counting.value()); // 1
console.log(counting.value(100)); // 100
counting.decrement();
console.log(counting.value()); // 99
console.log(counting.value(200)); // 200
counting.increment();
console.log(counting.value()); // 201



let myPrint = (a, b, res) => `${a}^${b}=${res}`;
let myPow = (a, b, callback) => {
  let pow = (x, n) => {
    if (n !== 1) return x *= pow(x, n - 1);

    return x;
  };

  return callback(a, b, pow(a, b));
};

console.log(myPow(3, 4, myPrint)); // 3^4=81
console.log(myPow(2, 3, myPrint)); // 2^3=8

function info() {
  return `${this.name} ${this.model}, ${this.engine}cc, year ${this.year}, ${this.used}`;
}

let yearNow = new Date().getFullYear();

let car = {
  engine: 1800,
  model: 'Prius',
  name: 'Toyota',
  year: 2010,
  info: info,
  get used() {
    return this.year !== yearNow ? 'used' : 'new';
  },
  set used(value) {
    if (value === 'new' && this.year < yearNow) this.year = yearNow;
  }
};

let car2 = {
  engine: 2000,
  model: 'Elantra',
  name: 'Hyndai',
  year: 2022,
  info: info,
  get used() {
    return yearNow - this.year ? 'used' : 'new';
  },
  set used(value) {
    if (value === 'new' && this.year < yearNow) this.year = yearNow;
  }
};


console.log(car.info());
car.used = 'new';
console.log(car.info());
car.used = 'used';
console.log(car.info());
console.log(car2.info());
car.used = 'used';
console.log(car2.info());

let list = [12, 23, 100, 34, 56, 9, 201];

let myMax = (arg) => Math.max.apply(Math, arg);

console.log(myMax(list));


function myMul(a, b) {
  return a * b;
}

let myDouble = myMul.bind(null, 2);

console.log(myDouble(3));
console.log(myDouble(4));
console.log(myDouble(7));

let myTriple = myMul.bind(null, 3);


console.log(myTriple(3));
console.log(myTriple(5));
console.log(myTriple(9));

let notUniqNums = [1, 1, 2, 3, 4, 5, 6]
let notUniqStrings = [
  'Vlad',
  'Bogdan',
  'Viktoria',
  'Roman',
  'Denis',
  'Bogdan',
  'Roman',
  'Viktoria'
]

let myUniq = (arr) => {
  let set = new Set();

  arr.forEach((val) => {
    set.add(val)
  });

  return set;
};

console.log(myUniq(notUniqNums));
console.log(myUniq(notUniqStrings));