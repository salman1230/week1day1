function isPalindrome() {
    let input="madam"
    let convertString = input.split("")
    // console.log(convertString)
    let reverseString = ""
    for (let i =convertString.length - 1; i >= 0; i--) {
        reverseString += convertString[i]
    }
    console.log("Reversed string:", reverseString)
    if (input === reverseString) {
        return true;
    } else {
        return false;
    }
}
console.log(isPalindrome())


