const btn = document.querySelector("#btn");
const res = document.querySelector("#result");
const birthday = document.querySelector("#birthday");

res.classList.add("hide");

function getAge(birthday) {
  const birthdayDate = new Date(birthday);
  const currDate = new Date();
  //   console.log(currDate);

  let age = currDate.getFullYear() - birthdayDate.getFullYear();
  //   console.log(age);

  const birthMonth = birthdayDate.getMonth();
  const currMonth = currDate.getMonth();
  const month = currMonth - birthMonth;

  //   console.log(currMonth);
  //   console.log(currDate.getDate());

  if (
    month < 0 ||
    (month === 0 && currDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }
  //   console.log(age);
  return age;
}

function ageCalc() {
  const birthdayVal = birthday.value;

  if (!birthdayVal) {
    alert("Enter birthday");
    return;
  }

  const age = getAge(birthdayVal);

  res.classList.add("show");

  age > 1
    ? (res.innerHTML = `Your age is ${age} years old`)
    : (res.innerHTML = `Your age is ${age} year old`);
}
btn.addEventListener("click", ageCalc);
