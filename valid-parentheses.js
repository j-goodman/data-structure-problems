// Write a function that takes in a string and returns true if every opening parenthesis has a matching closing parenthesis, and false otherwise.

// Examples:
// isValidParentheses("(())") -> true
// isValidParentheses("hi (hello)") -> true
// isValidParentheses("(()") -> false
// isValidParentheses("hello ) there") -> false

const isValidParentheses = input => {
    const stack = []

    for (const char of input) {
        if (char === "(") {
            stack.push(char)
        } else if (char === ")") {
            if (stack.length === 0) {
                return false
            }
            stack.pop()
        }
    }

    return stack.length === 0
}

console.log(isValidParentheses("(())"))
console.log(isValidParentheses("hi (hello)"))
console.log(isValidParentheses("(()"))
console.log(isValidParentheses("hello ) there"))
