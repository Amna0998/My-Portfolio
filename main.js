let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector("#.navbar");
let selections = document.querySelectorAll("selection");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a [href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
function sendEmail() {
  const bodyMessage =
    "Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${message.value}";
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "amna.ak.khan03@gmail.com",
    Password: "267B3C96CA217C8202675CE86F4C6F4236DB",
    To: "amna.ak.khan03@gmail.com",
    From: "amna.ak.khan03@gmail.com",
    Subject: subject.value,
    Body: bodyMessage,
  }).then((message) => alert(message));
}
form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();
});
