document.querySelector("#genratorPass").addEventListener("click", () => {
  const user_input_text = document.querySelector("#passlen");
  const user_input_number = document.querySelector(
    "input[name=number]:checked"
  )?.value;

  request(user_input_text, user_input_number);
});
const passworldEl = document.getElementById("dispPassword");

document.querySelector('input[name="number]:checked');

request = (user_input_text, user_input_number) => {
  let url = `https://www.psswrd.net/api/v1/password/?length=${user_input_text.value}&int=${user_input_number}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#dispPassword").innerHTML = data.password;
    });
};
