const checkBtnDOM = document.querySelector('.check-btn');
const resultsTipDisplayDOM = document.getElementById('resultTip');
const resultsDisplayDOM = document.getElementById('result');
const billInputDOM = document.getElementById('bill-input');
const rateInputDOM = document.getElementById('rate-input');

 

checkBtnDOM.addEventListener('click', function () {
    const bill = billInputDOM.value;
    const rate = rateInputDOM.value;

    let str = "";
    for (let i = 0; i < rate.length; i++) {
        if(rate[i] >= "0" && rate[i] <= "9") {
                str += rate[i];
        }
    }
    
    const rateNum = +str;
    const billNum = +bill;
    const tip = (rateNum * billNum) / 100;
    const result = billNum + tip;


    resultsTipDisplayDOM.innerHTML = `${tip}€`;
    resultsDisplayDOM.innerHTML = `${result}€`;

 
});
 