const firstDigitInput = document.querySelector("#first-digit-input");
const secondDigitInput = document.querySelector("#second-digit-input");
const predictBtn = document.querySelector("#prediction-btn");
const outputBox = document.querySelector("#output-box");
const resetBtn = document.querySelector("#reset-btn");
outputBox.innerText = "Prediction will come here!!!";


function predictNumber() {

    let first = Number(firstDigitInput.value);
    let second = Number(secondDigitInput.value);
    let sum = first + second;
    let prediction;
    if (sum < 9) {
        prediction = 9 - sum;
        outputBox.innerText = "Your third digit is :" + prediction;
    } else if (sum === 9) {
        outputBox.innerText = "Your third digit will be 9 or 0";
    } else {


        let x = sum % 10;
        let y = parseInt(sum / 10);
        sum = x + y;
        prediction = 9 - sum;
        outputBox.innerText = "Your third digit is :" + prediction;

    }
}

function reset() {
    firstDigitInput.value = "";
    secondDigitInput.value = "";
    outputBox.innerText = "Prediction will come here!!!";
}




predictBtn.addEventListener('click', predictNumber);
resetBtn.addEventListener('click', reset);