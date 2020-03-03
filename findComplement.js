var findComplement = function(num) {
    num = num.toString(2).split("").map(n => (+n+1) % 2).join("");
    return parseInt(num,2)
};
console.log(findComplement(5));
