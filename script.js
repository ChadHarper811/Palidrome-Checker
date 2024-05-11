const userInputText = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultsDiv = document.getElementById("result");
const definitionTarget = document.getElementById("definition-target");
const definitionDiv = document.getElementById("definition-div");

const palindromeCheck = str => {
    const userInputStr = str;

    if (str === "") {
        alert("Please input a value");
        return;
    }

    const compareStr = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
    let results = ``;
    if (compareStr === compareStr.reverse().join("")) {
        results = `<bold>${userInputStr}</bold> is a palindrome.`
    } else {
        results = `<bold>${userInputStr}</bold> is not a palindrome.`
    }
    
}

definitionTarget.addEventListener("click", () => {
    if (definitionDiv.classList.contains("hidden")) {
        definitionDiv.classList.remove("hidden");
    } else {
        definitionDiv.classList.add("hidden");
    }
    
})