var showNumbers = new Function('...numbers', 'console.log(numbers)');
showNumbers(1, 2, 3);

console.log(showNumbers);