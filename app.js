const IbCardCvc = document.getElementById("input-cvc");
const Iname = document.getElementById("input-name");
const Inumber = document.getElementById("input-number");
const Imonth = document.getElementById("input-month");
const Iyear = document.getElementById("input-year");

const form = document.getElementById("form");

const formConfirmedPbox = document.getElementById("form-confirmedP-box");

const nameER = document.getElementById("nameER");
const numberER = document.getElementById("numberER");
const dateER = document.getElementById("dateER");
const cvcER = document.getElementById("cvcER");


const CbCardCvc = document.getElementById("b-card-cvc");
const Cname = document.getElementById("name");
const Cnumber = document.getElementById("number");
const Cdate = document.getElementById("exp-date");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    cardDetails();
    if (checkInput()) {
        loadCpage();
    }

});

function checkInput() {
    let dateCor = 0;
    const messageB = "Can't be blank";
    const messageF = "Wrong format, numbers only";
    let numIcorrect = 0;
    let name = Iname.value.trim();
    let number = Inumber.value.trim().replace(/ /g, "");
    let month = Imonth.value.trim();
    let year = Iyear.value.trim();
    let bCardCvc = IbCardCvc.value.trim();



    if (name === "") {
        nameER.innerText = messageB;
        Iname.className = "input-error";
    } else {
        nameER.innerText = "";
        numIcorrect += 1;
        Iname.className = "";
    }


    if (number === "") {
        numberER.innerText = messageB;
        Inumber.className = "input-error";
    } else if (isNaN(number)) {
        numberER.innerText = messageF;
        Inumber.className = "input-error";
    } else if (number.length != 16) {
        numberER.innerText = "Wrong format, type 16 numbers";
        Inumber.className = "input-error";
    } else if (number.includes(".")) {
        numberER.innerText = "Wrong format, follow the example";
        Inumber.className = "input-error";
    } else {
        numberER.innerText = "";
        numIcorrect += 1;
        Inumber.className = "";
    }


    if (month === "") {
        dateER.innerText = messageB;
        Imonth.className = "input-error"
    } else if (isNaN(month)) {
        dateER.innerText = messageF;
        Imonth.className = "input-error"
    } else if (month.includes(".")) {
        dateER.innerText = "Wrong format, follow the example";
        Imonth.className = "input-error";
    } else if (month < 1 || month > 12) {
        dateER.innerText = "The number entered is wrong";
        Imonth.className = "input-error";
    } else {
        Imonth.className = "";
        dateCor += 1;
    }

    if (year === "") {
        dateER.innerText = messageB;
        Iyear.className = "input-error";
    } else if (isNaN(year)) {
        dateER.innerText = messageF;
        Iyear.className = "input-error";
    } else if (year.includes(".")) {
        dateER.innerText = "Wrong format, follow the example";
        Iyear.className = "input-error";
    } else if (year < 22 || year > 99) {
        dateER.innerText = "The number entered is wrong";
        Iyear.className = "input-error";
    } else {
        Iyear.className = "";
        dateCor += 1;
    }

    if (dateCor == 2) {
        dateER.innerText = "";
        numIcorrect += 1;
    }

    if (bCardCvc === "") {
        cvcER.innerText = messageB;
        IbCardCvc.className = "input-error";
    } else if (isNaN(bCardCvc)) {
        cvcER.innerText = messageF;
        IbCardCvc.className = "input-error";
    } else if (bCardCvc.length != 3) {
        cvcER.innerText = "Wrong format";
        IbCardCvc.className = "input-error"
    } else if (number.includes(".")) {
        cvcER.innerText = "Wrong format, follow the example";
        IbCardCvc.className = "input-error";
    } else {
        cvcER.innerText = "";
        numIcorrect += 1;
        IbCardCvc.className = "";
    }


    if (numIcorrect == 4) {
        return true;
    }


}

function loadCpage() {
    formConfirmedPbox.innerHTML = `<div class="flex-content"><div class="content"><img src="/icon-complete.svg" alt="Check Mark" class="icon-compconste"><h1>THANK YOU!</h1><p>We've added your card details</p><input type="button" id="btn-continue" value="Continue"></div></div>`
}

function cardDetails() {
    CbCardCvc.textContent = (IbCardCvc.value)
    let number = Inumber.value.trim().replace(/ /g, "");
    let shownNumber = "";
    for (let i = 0; i < number.length; i++) {
        shownNumber += number[i];
        if ((i + 1) % 4 == 0) {
            shownNumber += " ";
        }
    }
    Cnumber.textContent = (shownNumber)
    Cname.textContent = (Iname.value)
    Cdate.textContent = (`${Imonth.value}/${Iyear.value}`)
}