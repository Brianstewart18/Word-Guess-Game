
//create an array of words
    var word = ['alabama', 'kentucky', 'mississippi', 'tennessee', 'arkansas', 'louisiana', 'oklahoma', 'texas', 'georgia', 'maryland', 'nebraska'];
//choose word randomly
    let randNum = Math.floor(Math.random() * word.length);

//define variables
    let choosenWord = word[randNum];
    let rightWord = [];
    let wrongWord = [];
    let underScore = [];
    let lives = 12;
//dom manipulation
let docUnderScore = document.getElementsByClassName('underScore'); 
let docRightGuess = document.getElementsByClassName('rightGuess');
let docWrongGuess = document.getElementsByClassName('wrongGuess');
console.log(choosenWord);

// creartes underscores based on word lentgh
let generateUnderscore = () => {
    for(let i = 0; i < choosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}

//get users guess
document.addEventListener('keypress', (event) => {
    let keyword = String.fromCharCode(event.keyCode);
    console.log();
    // check if guess is right.
    if(choosenWord.indexOf(keyword) > -1) {
        console.log(true);
    }

//if users guess is right
    if(choosenWord.indexOf(keyword) > -1) {
        //alt way of tracking right guesses
            //add to right words array
                // var found = false;
                // if (rightWord != null) {
                //     for (var i = 0; i < rightWord.length; i++) {
                //         if (rightWord[i] == keyword) {
                //             found = true;
                //             break;
                //         }
                //     }
                // }
                // if (found == false) {
                //     rightWord.push(keyword);
            // }

        if (rightWord.indexOf(keyword) == -1) {
            rightWord.push(keyword);
        }
        //replace underscore with corresponding letter

        // "Walk" the array of characters in "chosenWord" with a for loop similar to the way you do a lookup for the "rightWord" array

        //underScore[choosenWord.indexOf(keyword)] = keyword;
        for (var i = 0; i < choosenWord.length; i++) {
            if (choosenWord[i] == keyword) {
                underScore[i] = keyword;
            }
        }
            docUnderScore[0].innerHTML = underScore.join(' ');
            //push to right words array
            docRightGuess[0].innerHTML = rightWord.join(', ');
        //check if user word matches guesses
        if(underScore.join('') == choosenWord) {
            alert('You got it! click ok for a new word.');
            location.reload();
        }
    }
    // if wrong push to wrong array
   
    if (wrongWord.indexOf(keyword) == -1) {
        wrongWord.push(keyword);
        docWrongGuess[0].innerHTML = wrongWord.join(' ,');
        console.log(wrongWord);
    }
});

docUnderScore[0].innerHTML = generateUnderscore().join(' ');


/*
[]          the index of 'a' is -1
["a"]       the index of 'a' is 0
["a","x"]   the index of 'a' is 0, the index of 'x' is 1, the index of 'b' is -1
*/
