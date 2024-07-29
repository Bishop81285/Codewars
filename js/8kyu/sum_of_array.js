// Sum Numbers
function sum (numbers) {
    "use strict";
    let sum = 0;
    for (const el of numbers) {
      sum += el;
    }
    
    return numbers ? sum : 0;
};
