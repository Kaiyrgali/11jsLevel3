"use strict"

function fib(n) {
    let num1 = 0,
        num2 = 1,
        result = 0 ;
    for (let i = 0; i < n-1; i++) {
        result = num1 + num2 ;
        num1 = num2 ;
        num2 = result ;
        }
        return result;
    }
alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757

let division = a => b => {
    return a / b ;
};
console.log (division (6)(2));

let timer = 0 ;
let Int = setInterval(printNumbers, 1000, 10, 20);  // - Используя setInterval.

function printNumbers(from, to) {
    if (from + timer <= to ) {
        console.log (from + timer) ;
        timer ++ ;
    } else clearInterval(Int);
} ; 

function printNumbers(from2, to2) { // setTimeout рекурсия
    let current = from2;
  
    setTimeout(function go() {
      alert(current);
      if (current < to2) {
        setTimeout(go, 1000);
      }
      current++;
    }, 1000);
  }
  
printNumbers(5, 10);

function work(a, b) {
      alert( a + b );
    }

function spy(func) {
  function wrapper(...args) {
  wrapper.calls.push(args);
  return func.apply(this, arguments);
  }
  wrapper.calls = [];
  return wrapper;
  }

work = spy(work) ;
work(1, 2); // 3
work(4, 5); // 9
for (let args of work.calls) {
  alert( 'call:' + args.join() );
}
