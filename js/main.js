var userObj = {
  firstName: 'Vlad',
  lastName: 'Orlov',
  age: 27,
  fullName() {
    return `${userObj.firstName} ${userObj.lastName}`;
  }
 };

 console.log(userObj);

 console.log(userObj.fullName());


function defUpperStr(str) {
  return (str || 'Default text').toUpperCase();
}

console.log(defUpperStr('My text'));
console.log(defUpperStr());


function evenFn(n) {
  var arr = [];

  for (let i = 1; i <= n; i++) if (i % 2 === 0) arr.push(i);

  return arr;
}

console.log(evenFn(12));
console.log(evenFn(17));


function weekFn(cond) {
  var str = '';

  switch (cond) {
    case 1:
      str = 'Понедельник';
      break;
    case 2:
      str = 'Вторник';
      break;
    case 3:
      str = 'Среда';
      break;
    case 4:
      str = 'Четверг';
      break;
    case 5:
      str = 'Пятница';
      break;
    case 6:
      str = 'Суббота';
      break;
    case 7:
      str = 'Воскресенье';
      break;
    default:
      str = null;
  }

  return str;
}

console.log(weekFn(1));
console.log(weekFn(4));
console.log(weekFn(100));
console.log(weekFn(6.8));


function ageClassification(num) {
  return num > 0 
  ? num > 24 
  ? num > 44
  ? num > 65
  ? num > 75
  ? num > 90
  ? num > 122
  ? null
  : 'долгожители' 
  : 'старческий возраст' 
  : 'пожилой возраст' 
  : 'средний возраст' 
  : 'молодой возраст' 
  : 'детский возраст' 
  : null;
}

console.log('-1:', ageClassification(-1));
console.log('12:', ageClassification(12));
console.log('30:', ageClassification(30));
console.log('100:', ageClassification(100));


function oddFn(n) {
  var arr = [];
  var i = 0;

  while (i++ < n) if (i % 2 !== 0) arr.push(i);

  return arr;
}

console.log(oddFn(9));
console.log(oddFn(16));
console.log(oddFn(29));


function mainFunc (a, b, cb) {
  if (cb && typeof cb === 'function') return cb(a, b);

  return false;
}


function cbRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cbPow(num, pow) {
  return Math.pow(num, pow);
}

function cbAdd(a, b) {
  return a + b;
}

console.log(mainFunc(2, 5, cbRandom));
console.log(mainFunc(2, 5, cbPow));
console.log(mainFunc(2, 5, cbAdd));
console.log(mainFunc(2, 5, 'not a func'));
