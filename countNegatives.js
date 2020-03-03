var countNegatives = function(grid) {
    grid = grid.map(n => n.join("")).join("");
    return grid.split("-").length - 1;
};

console.log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]));
