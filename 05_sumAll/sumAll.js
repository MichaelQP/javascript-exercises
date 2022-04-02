const sumAll = function(min, max) {
    if (min < 0 || max < 0) return "ERROR";
    if (isNaN(min) || isNaN(max)) return "ERROR";

let sum = 0;
for (let i = min; i < max +1; i++){
    sum += i;
}
return sum;
};

// Do not edit below this line
module.exports = sumAll;
