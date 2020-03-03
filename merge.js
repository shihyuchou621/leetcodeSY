var merge = function(A, m, B, n) {
    for(i = 0; i < n; i++) {
        A[m + i] += B[i];
    }
    return A.sort((a, b) => (a - b));
};