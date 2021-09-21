function largestSubarraySum(arr) {
    // let start = 0;
    // let end = 0;
    // let max = arr[0];

    // for (let i = 0; i < arr.length; i++) {
    //     let sum = arr[i];
    //     for (let j = i + 1; j < arr.length; j++) {
    //         sum += arr[j];
    //         if (sum > max) {
    //             start = i;
    //             end = j;
    //             max = sum;
    //         }
    //     }
    // }
    
    // if (max < 0) {
    //     max = 0;
    // }
    
    // return max;

    // Kandane's Algorithm

    let localMax = arr[0];
    let globalMax = 0;

    for (let i = 1; i < arr.length; i++) {
        localMax = Math.max(arr[i], localMax + arr[i]);
        if (localMax > globalMax) {
            globalMax = localMax;
        }
    }
    return globalMax;

}