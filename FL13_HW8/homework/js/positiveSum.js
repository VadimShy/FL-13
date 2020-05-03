function positiveSum(arg1) {
    let isPositiveValue = value => value >=0 ? value : 0;

    return arg1.reduce((sum, current) => isPositiveValue(sum) + isPositiveValue(current));
}
positiveSum([2,4,6,8]);
positiveSum([0,-3,5,7]);