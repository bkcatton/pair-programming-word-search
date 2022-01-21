const wordSearch = (letters, word) => { 
    
        //loop though the same index of each row
        // push to an empty the value of the index of each row
        //check if the string we just made matches the given string
        // return true
        //otherwise return false
    if (letters.length === 0) return false; 
    let resultsArray = [];
    for (let i = 0; i < letters.length; i++) {
        console.log(letters[i]);
        let rowReturn = letters[i].join("");
        if (rowReturn === word) return true;
        reverseHorizontal = rowReturn.split("").reverse().join("");
        if (reverseHorizontal === word) return true;

        for (let j = 0; j <= letters[i].length; j++) {
           resultsArray.push(letters[j][i]);
        }
        let stringReturn = resultsArray.join("");
        console.log(stringReturn);
        if (stringReturn === word) return true;
        //reverse string and check if equal to word
        reverseArrayVertical = stringReturn.split("").reverse().join("");
        console.log(reverseArrayVertical);  
        if (reverseArrayVertical === word) return true;
        resultsArray = [];
    }
    return false;
}

module.exports = wordSearch