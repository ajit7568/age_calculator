const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const calcDateEl = document.getElementById("calcDate");
const resultEl = document.getElementById("result");

function calculateAge() {
  const birthdayValue = birthdayEl.value;
  const calcDateValue = calcDateEl.value;

  if (birthdayValue === "" || calcDateValue === "") {
    alert("Please enter both your birthday and the date of calculation");
  } else {
    const age = getAge(birthdayValue, calcDateValue);
    resultEl.innerText = `Your age is ${age.years} years, ${age.months} months, and ${age.days} days old at the date of ${calcDateValue}`;
  }
}

function getAge(birthdayValue, calcDateValue) {
  const currentDate = new Date(calcDateValue);
  const birthdayDate = new Date(birthdayValue);

  let age = {
    years: currentDate.getFullYear() - birthdayDate.getFullYear(),
    months: 0,
    days: 0
  };

  if (currentDate.getMonth() < birthdayDate.getMonth() ||
      (currentDate.getMonth() === birthdayDate.getMonth() && currentDate.getDate() < birthdayDate.getDate())) {
    age.years--;
    const lastMonth = (currentDate.getMonth() === 0) ? 11 : currentDate.getMonth() - 1;
    age.months = 12 - birthdayDate.getMonth() + lastMonth;
  } else {
    age.months = currentDate.getMonth() - birthdayDate.getMonth();
  }

  age.days = currentDate.getDate() - birthdayDate.getDate();

  return age;
}

btnEl.addEventListener("click", calculateAge);
