// Will take inputs for text box and radio for Variables
document.querySelector("#genratorPass").addEventListener("click", () => {
  const user_input_text = document.querySelector("#passlen");
  const user_input_number = document.querySelector(
    "input[name=number]:checked"
  )?.value;
  const user_input_upper = document.querySelector(
    "input[name=upper]:checked"
  )?.value;
  const user_input_special = document.querySelector(
    "input[name=spec]:checked"
  )?.value;
  const user_input_lower = document.querySelector(
    "input[name=lower]:checked"
  )?.value;
  request(
    user_input_text,
    user_input_number,
    user_input_upper,
    user_input_special,
    user_input_lower
  );
});
//where output is displayed to html
const passworldEl = document.getElementById("dispPassword");

document.querySelector('input[name="number]:checked');

//https://corsproxy.io/ used to bypass cors errors
// adds Variables to url
request = (
  user_input_text,
  user_input_number,
  user_input_upper,
  user_input_special,
  user_input_lower
) => {
  let url = `https://corsproxy.io/?https://passwordwolf.com/api/?length=${user_input_text.value}&upper=${user_input_upper}&numbers=${user_input_number}&special=${user_input_special}&lower=${user_input_lower}&repeat=1`;
  fetch(url)
    .then((response) => response.json())
    //displays output to output box dispPassword
    .then((responseJson) => {
      for (let { password } of responseJson) {
        const apipass = document.createElement("p");
        apipass.innerText = password;
        document.querySelector("#dispPassword").innerHTML = password;
        console.log(password);
      }
    })
    .catch(function (error) {
      console.error(
        "Something went wrong,input blank?,proxy is do?, offline? "
      );
    });
};
