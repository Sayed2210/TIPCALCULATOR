//add fun and action for buuton
let calc = document.getElementById('claculator');
calc.addEventListener("click", ()=> {
    let billamount =document.getElementById('bill').value;
    let serviceAmount =document.getElementById('tips').value;
    let numOfPeople = document.getElementById('people').value;
    if (billamount === '' || serviceAmount == 0 ) {
        alert('please Enter amount and bill')
    }
    if (numOfPeople === '' || numOfPeople <= 1) {
        numOfPeople = 1;
    }
    else {
        document.getElementById('each').style.display= "block";
    }
    //calc tip
    let total =((billamount * serviceAmount) / numOfPeople).toFixed(2);
    document.querySelector('.total').style.display= "block";
    document.getElementById('amount').innerHTML= total;
})