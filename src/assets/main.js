let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
}

//implement new functions here
function setHiddenFields () {
    attempt = 0;

    let number = Math.floor(Math.random() * 1000);
    console.log(number);

    // let random = Math.random();
    // let random2 = random * (9999 - 0);
    // let number = Math.floor(random2);

    answer = number.toString();

    while (answer.length < 4) {
        answer = '0' + answer;
    }
    console.log(answer);
}
