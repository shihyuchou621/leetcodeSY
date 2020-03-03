var longestCommonPrefix = function(strs) {
    // strs = strs.map(n => n.split(''));
    if( strs.length === 0 ) return "";
    var result = '';
    for( var i = 0; i < strs[0].length; i++) {
        for( var j = 1; j < strs.length; j++) {
            if(strs[j][i] !== strs[0][i]) break;
        }
        if(j === strs.length)
            result = strs[0].slice(0, i + 1); 
        else
            break;
    }
    return result;
};

console.log(longestCommonPrefix([]));
