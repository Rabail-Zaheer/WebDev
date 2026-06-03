function palindrome(myString) {
    // In case any special characters or spaces are given in input, they are removed.
    var input = myString.replace(/[^A-Z0-9]/ig, "").toLowerCase();

    // Reversing the processed string by splitting, reversing, and joining it
    var reversedInput = input.split('').reverse().join('');

    // Target the result div in the HTML
    var resultDiv = document.getElementById("result");

    // Don't do anything if the user submitted an empty input
    if (input === "") {
        resultDiv.innerHTML = "<span class='error'>Please enter some letters or numbers!</span>";
        return;
    }

    // Checking for palindrome and inserting dynamic HTML classes for coloring
    if (input === reversedInput) {
        resultDiv.innerHTML = "<span class='success'>\"" + myString + "\" is a palindrome! ✨</span>";
    } else {
        resultDiv.innerHTML = "<span class='error'>\"" + myString + "\" is not a palindrome. ❌</span>";
    }
}

// Wrapper function called by the button click
function checkPalindrome() {
    var inputValue = document.getElementById("userInput").value;
    palindrome(inputValue);
}

// Optional: Invoking the function automatically on page load with "madam" as requested
window.onload = function() {
    palindrome("madam");
};