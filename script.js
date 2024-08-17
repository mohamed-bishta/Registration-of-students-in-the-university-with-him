
const fromContent = document.querySelectorAll(".from-content input");
const content = document.querySelector(".content");
const mainUsername = document.querySelector(".from-content input[type='username']");
const mainPassword = document.querySelector(".from-content input[type='password']");
const salary = document.querySelector(".from-content input[type='text']");
const mainNumber = document.querySelector(".from-content input[type='number']");
const search = document.querySelector(".from-content input[type='search']");
const addCreated = document.querySelector(".add-created");
const removeAll = document.querySelector(".removeAll");
const addSearch = document.querySelector(".add-search");
const clickCountery = document.querySelector(".clickCountery");
const Country = document.querySelector(".counter");

const themoney = 10000;
const currentItemCount = 5000;
const maxPassword = 11;
const maxNumber = 11;
const maxItems = 0;

window.onload = function () {
    let storedItems = JSON.parse(localStorage.getItem('taskElement')) || [];
    storedItems.forEach(item => {
        checkedReaQuest(item, true);
    });
};


document.querySelector(".add-created").addEventListener("click", () => {

    checkdeItemNumberRequset();
});


addSearch.onclick = () => {

    checkdeItem();

};

clickCountery.onclick = () => {

    getQuistion();

};

removeAll.onclick = () => {

    removeAllLocal();

};

const asianCountries = [
    "Afghanistan", "Armenia", "Azerbaijan", "Bahrain", "Bangladesh", "Bhutan", "Brunei", "Cambodia",
    "China", "Cyprus", "Georgia", "India", "Indonesia", "Iran", "Iraq", "Israel", "Japan", "Jordan",
    "Kazakhstan", "Kuwait", "Kyrgyzstan", "Laos", "Lebanon", "Malaysia", "Maldives", "Mongolia", "Myanmar (Burma)",
    "Nepal", "North Korea", "Oman", "Pakistan", "Palestine", "Philippines", "Qatar", "Saudi Arabia", "Singapore",
    "South Korea", "Sri Lanka", "Syria", "Taiwan", "Tajikistan", "Thailand", "Timor-Leste", "Turkey", "Turkmenistan",
    "United Arab Emirates", "Uzbekistan", "Vietnam", "Yemen"
];



const africanCountries = [
    "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cameroon", "Cape Verde",
    "Chad", "Comoros", "Democratic Republic of the Congo", "Republic of the Congo", "Djibouti", "Egypt",
    "Equatorial Guinea", "Eritrea", "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea", "Guinea-Bissau",
    "Ivory Coast", "Kenya", "Lesotho", "Liberia", "Libya", "Madagascar", "Malawi", "Mali", "Mauritania",
    "Mauritius", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Rwanda", "Senegal", "Seychelles",
    "Sierra Leone", "Somalia", "South Africa", "South Sudan", "Sudan", "Eswatini", "Tanzania", "Togo",
    "Tunisia", "Uganda", "Zambia", "Zimbabwe"
];

const europeanCountries = [
    "Albania", "Andorra", "Armenia", "Austria", "Azerbaijan", "Belarus", "Belgium", "Bosnia and Herzegovina",
    "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Georgia",
    "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kazakhstan", "Kosovo", "Latvia", "Liechtenstein",
    "Lithuania", "Luxembourg", "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands", "North Macedonia", "Norway",
    "Poland", "Portugal", "Romania", "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden",
    "Switzerland", "Turkey", "Ukraine", "United Kingdom", "Vatican City"
];

const americanCountries = [
    "Antigua and Barbuda", "Argentina", "Bahamas", "Barbados", "Belize", "Bolivia", "Brazil", "Canada",
    "Chile", "Colombia", "Costa Rica", "Cuba", "Dominica", "Dominican Republic", "Ecuador", "El Salvador",
    "Grenada", "Guatemala", "Guyana", "Haiti", "Honduras", "Jamaica", "Mexico", "Nicaragua", "Panama",
    "Paraguay", "Peru", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
    "Suriname", "Trinidad and Tobago", "United States", "Uruguay", "Venezuela"
];


function getQuistion() {
    let myRequest = new XMLHttpRequest();

    myRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let questionsObject = JSON.parse(this.responseText);

            CountryNumbers(questionsObject);

        }
    };

    myRequest.open("GET", "main.json", true);
    myRequest.send();
}



function populateDropdown() {

    const allCountries = [
        ...africanCountries,
        ...europeanCountries,
        ...americanCountries,

    ];

    checkedresults(allCountries);
};

populateDropdown;


function checkedInputElement() {

    const usernameValue = mainUsername.value.trim();
    const passwordValue = mainPassword.value.trim();
    const numberValue = mainNumber.value.trim();
    const salaryValue = salary.value.trim();


    if (usernameValue !== "" && passwordValue !== "" && numberValue !== "" && salaryValue !== "") {
        alert('All inputs are valid!');

        checkedReaQuest(`Date/Time: ${getCurrentDateTime()} - Username: ${usernameValue}, Password: ${passwordValue}, number ${numberValue} Salary++: ${salaryValue}`);

        addLocalStorage();

        matchNumber();

    } else {
        alert('Please validate all inputs');
    }
}


function checkedInput() {
    fromContent.forEach(item => {

        if (item.value === "") {

            console.log("not valde");

        } else {

            checkedReaQuest(item.value);

            addLocalStorage();


        }
    })
};

function checkedReaQuest(ietmValue) {

    const div = document.createElement("div");
    const text = document.createTextNode(ietmValue);
    div.className = 'classElement';

    div.appendChild(text);

    const deleteBtn = document.createElement('div');
    deleteBtn.className = "delete";
    deleteBtn.textContent = "Delete";
    div.appendChild(deleteBtn);

    content.appendChild(div);

};


function addLocalStorage() {

    let myArray = [];

    content.querySelectorAll('.classElement').forEach(item => {

        let text = item.firstChild.textContent;
        myArray.push(text);
    });

    let myjson = JSON.stringify(myArray);

    localStorage.setItem("taskElement", myjson);
};

function updateLocalStorageAfterDeletion() {
    let myArray = [];
    content.querySelectorAll('.classElement').forEach(element => {
        let text = element.firstChild.textContent;
        myArray.push(text);
    });
    localStorage.setItem('taskElement', JSON.stringify(myArray));
}

document.addEventListener("click", (e) => {

    if (e.target.className === "delete") {

        e.target.parentNode.remove();

        updateLocalStorageAfterDeletion();

    }

});


function matchNumber() {

    const totalItemCount = content.querySelectorAll('.classElement').length;

    if (totalItemCount >= currentItemCount) {
        alert('The number of items is complete.');
    }
}



function validateNumber() {

    const salaryInput = document.querySelector("#text");
    const passwordInput = document.querySelector("#password");
    const countryCodeInput = document.querySelector("#number");

    const mainThemoney = themoney;
    const mainPassword = maxPassword;
    const mainNumber = maxNumber;

    const many = parseFloat(salaryInput.value.trim());
    const passwordLength = passwordInput.value.trim().length;
    const countryCodeLength = countryCodeInput.value.trim().length;



    if (passwordLength < mainPassword) {
        alert(`Password length is less than ${mainPassword} characters. You need ${mainPassword - passwordLength} more characters.`);
        return;
    }

    if (countryCodeLength < mainNumber) {
        alert(`Country code length is less than ${mainNumber} characters. You need ${mainNumber - countryCodeLength} more characters.`);
        return;
    }

    if (many < mainThemoney) {
        alert(`The entered salary is less than ${mainThemoney}. You need to add ${mainThemoney - many} more to reach ${mainThemoney}.`);
        return;
    }

    checkedInputElement();


}


function getCurrentDateTime() {
    let now = new Date();

    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayName = daysOfWeek[now.getDay()];

    let date = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let period = "AM";
    if (hours >= 12) {
        period = "PM";
        if (hours > 12) {
            hours -= 12;
        }
    } else if (hours === 0) {
        hours = 12;
    }

    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    let formattedDate = `${dayName}, ${date}/${month}/${year}`;
    let formattedTime = `${hours}:${minutes}:${seconds} ${period}`;

    return `${formattedDate} ${formattedTime}`;
};

let countDauendTiem = new Date('2024-12-31T23:59:59').getTime();

let counter = setInterval(() => {

    let dateNew = new Date().getTime();

    let dataDeiff = countDauendTiem - dateNew;

    let days = Math.floor(dataDeiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dataDeiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dataDeiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dataDeiff % (1000 * 60)) / 1000);

    document.querySelector('.days').innerHTML = days;
    document.querySelector('.hours').innerHTML = hours;
    document.querySelector('.minutes').innerHTML = minutes;
    document.querySelector('.seconds').innerHTML = seconds;

    if (dataDeiff < 0) {
        clearInterval(counter);
    }

}, 1000);



function removeAllLocal() {
    localStorage.removeItem("taskElement");
    content.innerHTML = "";

};


function CountryNumbers(countries) {
    const counter = document.querySelector(".counter");

    if (!counter) {
        console.error('Element with class "counter" not found!');
        return;
    }

    if (Array.isArray(countries)) {
        counter.innerHTML = '';

        countries.forEach((country) => {
            const div = document.createElement("div");
            div.className = 'CountryNumbers';

            const text = document.createTextNode(`${country.country} ${country.code}`);
            div.appendChild(text);

            const checkInput = document.createElement('input');
            checkInput.type = 'radio';
            checkInput.name = 'country';
            checkInput.className = 'countrys';
            checkInput.value = country.code;
            div.appendChild(checkInput);

            let popap = document.createElement("div");
            let poptext = document.createTextNode("X");
            popap.className = 'clos-popa';

            popap.appendChild(poptext);

            div.appendChild(popap);

            counter.appendChild(div);
        });
    } else {
        console.error('Invalid input: expected an array of countries.');
    }
}


document.addEventListener("click", (e) => {

    if (e.target.className === "clos-popa") {

        e.target.parentNode.remove();
    }
});

document.addEventListener('click', (e) => {

    if (e.target.className === "countrys") {
        const numberInput = document.querySelector(".from-content input[type='number']");
        const value = e.target.value;

        const numericValue = value.replace(/[^0-9]/g, '');

        if (numericValue !== '') {
            numberInput.value = numericValue;

        } else {
            console.error('Invalid value for number input:', value);
        }
    }
});

function checkdeItem() {
    let myArray = JSON.parse(localStorage.getItem('taskItems')) || [];
    let myInput = search.value.trim().toLowerCase();
    let found = false;


    content.querySelectorAll('.searchResult').forEach(el => el.remove());


    for (let i = 0; i < myArray.length; i++) {
        let item = myArray[i].toLowerCase();
        if (item.includes(myInput)) {
            found = true;

            displaySearchResult(item);
        }
    }


    if (!found) {
        console.log(`Item not found: ${myInput}`);
        displaySearchResult(`No results found for "${myInput}"`);
    }
}


function displaySearchResult(result) {

    const resultDiv = document.createElement("div");
    resultDiv.className = 'classElement';
    resultDiv.textContent = result;

    const deleteBtn = document.createElement('div');
    deleteBtn.className = "delete";
    deleteBtn.textContent = "Delete";
    resultDiv.appendChild(deleteBtn);

    content.appendChild(resultDiv);
}

function checkdeItemNumberRequset() {
    const mainNumber = document.querySelector("#number");
    const storedItems = document.getElementsByName('country');
    const searchValue = mainNumber.value.trim().toLowerCase();


    let found = false;

    for (let i = 0; i < storedItems.length; i++) {
        let item = storedItems[i].value.toLowerCase();
        if (item === searchValue) {
            found = true;


            return item;
        }
    }

    if (!found) {
        alert(`Not found for input: "${searchValue}"`);
    }

    validateNumber();
}

