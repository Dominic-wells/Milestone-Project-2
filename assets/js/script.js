document.querySelector("#genratorPass").addEventListener("click", () => {
  const user_input = document.querySelector("#passlen");
  request(user_input);
});

const passworldEl = document.getElementById("dispPassword");
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0886325422msha71678830f94f69p1092c7jsnb44591722c0d",
    "X-RapidAPI-Host": "password-generator1.p.rapidapi.com",
  },
};

request = (user_input) => {
  let url = `https://password-generator1.p.rapidapi.com/api/generePassWd?len=${user_input.value}`;
  fetch(url, options)
    .then((response) => response.json())
    .then((responseJson) => console.log(responseJson));
};
