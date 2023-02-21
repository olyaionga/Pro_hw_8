let birthYear = prompt("Введіть рік Вашого народження:");
let city = prompt("Введіть місто, в якому Ви живете:");
let favoriteSport = prompt("Введіть Ваш улюблений вид спорту:");

let message = "";
let champion = "";

switch (city) {
  case "Київ":
    message = "Ти живеш у столиці України.";
    break;
  case "Лондон":
    message = "Ти живеш у столиці Великої Британії.";
    break;
  case "Вашингтон":
    message = "Ти живеш у столиці США.";
    break;
  default:
    message = "Ти живеш у місті " + city + ".";
}

switch (favoriteSport) {
  case "футбол":
    champion = "Криштиану Роналду";
    break;
  case "бокс":
    champion = "Майк Тайсон";
    break;
  case "баскетбол":
    champion = "Майкл Джордан";
    break;
}

if (birthYear && city && favoriteSport) {
  message =
    "Ваш вік: " +
    (new Date().getFullYear() - parseInt(birthYear)) +
    ".\n" +
    message;

  if (champion) {
    message += "\nКруто! Хочеш стати " + champion + "?";
  }

  alert(message);
} else {
  let missingInputs = [];

  if (!birthYear) {
    missingInputs.push("рік народження");
  }
  if (!city) {
    missingInputs.push("місто");
  }
  if (!favoriteSport) {
    missingInputs.push("улюблений вид спорту");
  }

  alert(
    "Шкода, що Ви не захотіли ввести свій(ю) " +
      missingInputs.join(", ") +
      "."
  );
}

