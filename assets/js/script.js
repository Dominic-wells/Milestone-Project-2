"use strict";

const len = document.getElementById("passlen");
const api = "https://password-generator1.p.rapidapi.com/api/generePassWd?len=";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0886325422msha71678830f94f69p1092c7jsnb44591722c0d",
    "X-RapidAPI-Host": "password-generator1.p.rapidapi.com",
  },
};

function generate() {
  const generate = fetch(api, len, options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
