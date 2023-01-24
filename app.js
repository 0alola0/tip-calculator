const buttons = document.querySelectorAll('.tip')
const tipDisplay = document.querySelector('.tip-display')
const totalDisplay = document.querySelector('.total-display')
var customTip = document.querySelector('.custom-tip')
var tipInput = document.querySelector('.tip-input')
var bill = document.querySelector('.money-amount')
var people = document.querySelector('.people')
const reset = document.querySelector(".reset")
const no0 = document.querySelector('.no-0')
people.value = 5;

var tip = 0.05;
const roundToHundredth = (value) => {
    return Number(value.toFixed(2));
};
const calculate = (bill, tip, person) => {
    tipDisplay.textContent = roundToHundredth((bill*tip)/person)
    totalDisplay.textContent = roundToHundredth((bill/person)+(bill*tip)/person)
};



function billChange(){
    if(people.value=="0" || people.value=="" ){
        people.style.border = "3px solid #E17457";
        no0.textContent = "Can't be zero"
    }
    else{
        calculate(bill.value, tip, people.value)
    }
}


buttons.forEach(button => button.addEventListener('click',() => tipBtn(button)))


function tipCustom(){
    if(people.value=="0" || people.value=="" ){
        people.style.border = "3px solid #E17457";
        no0.textContent = "Can't be zero"
    }
    else{
        buttons.forEach(button => button.classList.remove("active"))
        tip = tipInput.value/100
        calculate(bill.value, tip, people.value)
    }
}


function tipBtn(button){
    if(people.value=="0" || people.value=="" ){
        people.style.border = "3px solid #E17457";
        no0.textContent = "Can't be zero";
    }
    else{
        buttons.forEach(button => button.classList.remove("active"))
        tip = button.value
        button.classList.add("active")
        console.log(tip)
        calculate(bill.value, tip, people.value)
    }
}

function peopleChange(){
    if(people.value[0]=="0" || people.value=="" ){
        people.style.border = "3px solid #E17457";
        no0.textContent = "Can't be zero";

    }
    else{
        console.log(people.value)
        people.style.border = "none";
        no0.textContent = ""
        calculate(bill.value, tip, people.value)
    }
}

function Reset(){
    people.value = 5
    bill.value = 0
    tipInput.value = ""
    tipDisplay.textContent = 0.00
    totalDisplay.textContent = 0.00
}


