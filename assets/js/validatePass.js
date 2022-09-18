//code guidance from https://iqcode.com/code/javascript/password-weakness-checker
let timeout;
const password = document.getElementById("PassDifficulty");
const strengthBadge = document.getElementById("strengthDisp");
const strongPassword = new RegExp(
  "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
);
// most common passwords https://en.wikipedia.org/wiki/Wikipedia:10,000_most_common_passwords
const usedList = [
  "123456",
  "password",
  "12345678",
  "qwerty",
  "123456789",
  "12345",
  "1234",
  "111111",
  "1234567",
  "dragon",
  "123123",
  "baseball",
  "abc123",
  "football",
  "monkey",
  "letmein",
  "696969",
  "shadow",
  "master",
  "666666",
  "qwertyuiop",
  "123321",
  "mustang",
  "1234567890",
  "michael",
  "654321",
  "pussy",
  "superman",
  "1qaz2wsx",
  "7777777",
  "fuckyou",
  "121212",
  "000000",
  "qazwsx",
  "123qwe",
  "killer",
  "trustno1",
  "jordan",
  "jennifer",
  "zxcvbnm",
  "asdfgh",
  "hunter",
  "buster",
  "soccer",
  "harley",
  "batman",
  "andrew",
  "tigger",
  "sunshine",
  "iloveyou",
  "fuckme",
  "2000",
  "charlie",
  "robert",
  "thomas",
  "hockey",
  "ranger",
  "daniel",
  "starwars",
  "klaster",
  "112233",
  "george",
  "asshole",
  "computer",
  "michelle",
  "jessica",
  "pepper",
  "1111",
  "zxcvbn",
  "555555",
  "11111111",
  "131313",
  "freedom",
  "777777",
  "pass",
  "fuck",
  "maggie",
  "159753",
  "aaaaaa",
  "ginger",
  "princess",
  "joshua",
  "cheese",
  "amanda",
  "summer",
  "love",
  "ashley",
  "6969",
  "nicole",
  "chelsea",
  "biteme",
  "matthew",
  "access",
  "yankees",
  "987654321",
  "dallas",
  "austin",
  "thunder",
  "taylor",
  "matrix",
];
//Chucknorris easter egg
let chuckMode = new RegExp(/Chucknorris|chucknorris/g);
//If else,else for password
function analysePassword(PasswordParameter) {
  if (usedList.includes(PasswordParameter)) {
    strengthBadge.style.background = "orange";
    strengthBadge.textContent = "One of the most common passwords..";
    document.getElementById("passworddivbox").style.backgroundColor = "#1D1D1D";
    console.log("onlist");
  } else if (chuckMode.test(PasswordParameter)) {
    strengthBadge.style.background = "orange";
    document.getElementById("passworddivbox").style.backgroundColor = "gold";
    strengthBadge.textContent =
      "There is no chin behind Chuck Norris' beard. There is only another fist.";
    console.log("The god Chuck");
  } else if (strongPassword.test(PasswordParameter)) {
    strengthBadge.style.backgroundColor = "green";
    document.getElementById("passworddivbox").style.backgroundColor = "#1D1D1D";
    strengthBadge.textContent = "Few passwords are safe this could be one ";
    console.log("Strong");
  } else {
    strengthBadge.style.backgroundColor = "red";
    document.getElementById("passworddivbox").style.backgroundColor = "#1D1D1D";
    strengthBadge.textContent =
      "Needs improvement, Go and read the password section again...";
    console.log("Weak");
  }
}

password.addEventListener("input", () => {
  strengthBadge.style.display = "block";
  clearTimeout(timeout);
  timeout = setTimeout(() => analysePassword(password.value), 500);
  if (password.value.length !== 0) {
    strengthBadge.style.display != "block";
  } else {
    strengthBadge.style.display = "none";
  }
});
