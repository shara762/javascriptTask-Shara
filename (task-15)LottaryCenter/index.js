var btn = document.getElementById("confirm-btn")
// console.log(btn);
var gbtn = document.getElementById("genLotary")
// console.log(gbtn);
var cashinput = document.getElementById("take-cash")
// console.log(cashinput);
var cashdisplay = document.getElementById("cash")

var inputbox = document.getElementsByClassName("inputbox")
// console.log(inputbox);
var box = document.getElementsByClassName("box")

var winningamt = document.getElementById("winningamt");
// console.log(winningamt);
gbtn.disabled = true;

btn.addEventListener("click", () => {

    if (cashinput.value == "" || cashinput.value <= 0) {
        alert("Invalid input")
    }
    else {
        cashinput.style.display = 'none';
        cashdisplay.innerHTML = `<center><h2> Invest Amount:<i class="fa-thin fa-coins">${cashinput.value}</i></h2></center>`
        gbtn.disabled = false;
    }
})

gbtn.addEventListener("click", () => {

    if (cashinput.value == "") {
        gbtn.disabled = "";
    }
    winningamt.style.display = 'block';

    if (inputbox[0].value == "" || inputbox[0].value < 0 || inputbox[1].value == "" || inputbox[1].value < 0 || inputbox[2].value == "" || inputbox[2].value < 0 || inputbox[3].value < 0 || inputbox[3].value == "") {
        alert("invalid input")
    }
    else {
        gif.style.display = 'block';
        for (i = 0; i < 4; i++) {
            box[i].style.display = 'block';
        }

        let indexcnt = 0;
        var shownum = setInterval(() => {
            var c = 0;
            num = Math.floor((Math.random() * 9))
            // console.log(num);
            box[indexcnt].value = num;

            if (inputbox[indexcnt].value == box[indexcnt].value) {
                cashinput.value = cashinput.value * 10;
                winningamt.innerHTML = `<h2><i class="fa-sharp fa-light fa-indian-rupee-sign">Congratualtion You Have Won ${cashinput.value} Rupees</i></h2>`;
            }
            indexcnt++;
            if (indexcnt == 4)
                clearInterval(shownum)

        }, 1000)
    }
})





