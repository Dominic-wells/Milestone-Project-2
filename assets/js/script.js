document.querySelector("#genratorPass").addEventListener("click", () => {
  const user_input = document.querySelector("#passlen");
  request(user_input);
});

// const passworldEl = document.getElementById("dispPassword");

request = (user_input) => {
  let url = `https://passwordinator.herokuapp.com?len=${user_input.value}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data);
      document.querySelector("#dispPassword").innerHTML = data.data;
    });
};
