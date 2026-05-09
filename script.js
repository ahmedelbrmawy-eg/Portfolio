// script.js

// Fade Animation
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {

  sections.forEach(section => {

    const top = section.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){
      section.classList.add("fade-up", "active");
    }

  });

});

// Language Toggle
const langBtn = document.getElementById("langToggle");

let currentLang = "en";

langBtn.addEventListener("click", () => {

  const elements = document.querySelectorAll("[data-en]");

  if(currentLang === "en"){

    document.documentElement.lang = "ar";
    document.documentElement.dir = "rtl";

    elements.forEach(el => {
      el.innerText = el.getAttribute("data-ar");
    });

    langBtn.innerText = "EN";

    currentLang = "ar";

  }else{

    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";

    elements.forEach(el => {
      el.innerText = el.getAttribute("data-en");
    });

    langBtn.innerText = "AR";

    currentLang = "en";

  }

});

// Chatbot
const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const chatBody = document.getElementById("chatBody");

function addMessage(message, type){

  const div = document.createElement("div");

  div.classList.add(type === "user" ? "user-message" : "bot-message");

  div.innerHTML = message;

  chatBody.appendChild(div);

  chatBody.scrollTop = chatBody.scrollHeight;
}

sendBtn.addEventListener("click", () => {

  const message = userInput.value.trim();

  if(message === "") return;

  addMessage(message, "user");

  userInput.value = "";

  setTimeout(() => {

    let reply = `
      Thanks for contacting Ahmed Elbrmawy 👋<br>
      Please contact via:<br><br>
      📧 Email<br>
      📱 Phone<br>
      🔗 LinkedIn
    `;

    addMessage(reply, "bot");

  }, 800);

});

userInput.addEventListener("keypress", (e) => {

  if(e.key === "Enter"){
    sendBtn.click();
  }

});