var removeOuterParentheses = function(S) {
  var ph = "";
  var phleft = 0;
  var phright = 0;
  var phsum = "";
  for( i = 0; i <= S.length; i++) {
      if(S[i] === "(") {
          ph += "(";
          phleft++;
      }
      if(S[i] === ")" && phleft - phright !== 1) {
          ph += ")";
          phright++;
      } else if(S[i] === ")" && phleft - phright === 1) {
          ph = ph.slice(1);
          phsum += ph;
          ph = "";
          phright++;
      }
  }
  return phsum;
};

var removeOuterParentheses2 = function (S) {
  var obj = {
    '(': 1,
    ')': -1,
  }

  var num = 0;
  var start = 0;
  var result = '';
  for (let i = 0; i < S.length; i++) {
    num += obj[S[i]];
    if(!num) {
      result += S.slice(start + 1, i);
      start = i + 1;
    }
  }
  return result;
}

console.warn(removeOuterParentheses2("(()())(())"));
