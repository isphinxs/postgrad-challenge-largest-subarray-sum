function largestSubarraySum(arr) {
    let start = 0;
    let end = 0;
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        let sum = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            sum += arr[j];
            if (sum > max) {
                start = i;
                end = j;
                max = sum;
            }
        }
    }
    
    if (max < 0) {
        max = 0;
    }
    
    return max;
}