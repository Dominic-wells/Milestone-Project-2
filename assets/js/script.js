// Code assist from https://sam-ngu.medium.com/click-to-copy-to-clipboard-copy-and-paste-with-javascript-be7857de83ca
const copyButton = document.getElementById("btn-copy");
copyButton.addEventListener("click", (event) => {
  // getting the text content that we want to copy
  const content = document.getElementById("dispPassword").textContent;
  // loading the content into our clipboard
  navigator.clipboard.writeText(content);
});
