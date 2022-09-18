// Code assist from https://sam-ngu.medium.com/click-to-copy-to-clipboard-copy-and-paste-with-javascript-be7857de83ca
const copyButton = document.getElementById("btn-copy");
copyButton.addEventListener("click", (event) => {
  // getting the text content that we want to copy
  const content = document.getElementById("dispPassword").textContent;
  // loading the content into our clipboard
  navigator.clipboard.writeText(content);
});

// const sections = document.querySelectorAll("section");
// const navLi = document.querySelectorAll("nav .container ul li");
// window.onscroll = () => {
//   var current = "";

//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     if (pageYOffset >= sectionTop - 60) {
//       current = section.getAttribute("id");
//     }
//   });

//   navLi.forEach((li) => {
//     li.classList.remove("active");
//     if (li.classList.contains(current)) {
//       li.classList.add("active");
//     }
//   });
// };
