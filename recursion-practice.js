// 1. Count down. Write a recursive function that takes in a non-negative integer and returns an array counting down from that number to 0.

const countDown = (n) => {
    if (n === 0) {
        return [0]
    }

    return [n].concat(countDown(n - 1))
}

// 2. Sum an array. Write a recursive function that takes in an array of numbers and returns the total.

// 3. Bubble sort. To prepare for the next problem, implement a bubble sort. Write a function that takes in an array of numbers and returns that same array, but sorted lowest to highest.

// 4. Recursive bubble sort. Write a function that takes in an array of numbers and returns a new array sorted from lowest to highest using recursion instead of loops.