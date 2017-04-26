let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
}

//implement new functions here
function setHiddenFields () {
    attempt = 0;
    var random = Math.random();

    var random2 = random * (9999 - 0);

    var number = Math.floor(random2);

    answer = number.toString();
    while (answer.length < 4){
        answer = '0' + answer;
    }
}
