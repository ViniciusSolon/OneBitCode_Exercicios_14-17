const dayjs = require("dayjs");

function niver(date) {
  const birthday = dayjs(date);
  const today = dayjs();

  const ageInYears = today.diff(birthday, "year");
  const nextBirthday = birthday.add(ageInYears + 1, "year");
  const daysOfBirthday = nextBirthday.diff(today, "day") + 1;

  console.log("A sua idade é: " + ageInYears);
  console.log(
    "O seu próximo aniversario é: " + dayjs(nextBirthday).format("DD/MM/YYYY")
  );
  console.log("Falta " + daysOfBirthday + " dias para o seu aniversario");
}

niver("2003-12-22");
