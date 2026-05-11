// LOADER
window.addEventListener("load", () => {

  setTimeout(() => {

    document.querySelector(".loader").style.opacity = "0";

    setTimeout(() => {
      document.querySelector(".loader").style.display = "none";
    }, 1000);

  }, 1500);

});

// LANGUAGE
const langBtn = document.getElementById("langToggle");

let currentLang = "en";

langBtn.onclick = () => {

  const elements = document.querySelectorAll("[data-en]");

  if(currentLang === "en"){

    currentLang = "ar";

    document.body.classList.add("ar");

    document.documentElement.lang = "ar";

    document.documentElement.dir = "rtl";

    langBtn.innerText = "EN";

    elements.forEach(el => {
      el.innerText = el.dataset.ar;
    });

  }else{

    currentLang = "en";

    document.body.classList.remove("ar");

    document.documentElement.lang = "en";

    document.documentElement.dir = "ltr";

    langBtn.innerText = "AR";

    elements.forEach(el => {
      el.innerText = el.dataset.en;
    });

  }

};

// CHATBOT
const chatbot = document.querySelector(".chatbot");

const minimizeBtn = document.getElementById("minimizeChat");
const closeBtn = document.getElementById("closeChat");
const endBtn = document.getElementById("endChat");
const startBtn = document.getElementById("startChat");

const sendBtn = document.getElementById("sendMessage");
const chatInput = document.getElementById("chatInput");
const chatBody = document.querySelector(".chat-body");

minimizeBtn.onclick = () => {
  chatbot.classList.toggle("minimized");
};

closeBtn.onclick = () => {
  chatbot.style.display = "none";
};

startBtn.onclick = () => {

  chatbot.style.display = "block";

  addBotMessage("Conversation started 🚀");

};

endBtn.onclick = () => {

  chatBody.innerHTML = "";

  addBotMessage("Conversation ended.");

};

function addBotMessage(text){

  const div = document.createElement("div");

  div.className = "bot-message";

  div.innerText = text;

  chatBody.appendChild(div);

  chatBody.scrollTop = chatBody.scrollHeight;

}

function addUserMessage(text){

  const div = document.createElement("div");

  div.className = "user-message";

  div.innerText = text;

  chatBody.appendChild(div);

  chatBody.scrollTop = chatBody.scrollHeight;

}

sendBtn.onclick = sendMessage;

chatInput.addEventListener("keypress", function(e){

  if(e.key === "Enter"){
    sendMessage();
  }

});

function sendMessage(){

  const text = chatInput.value.trim();

  if(text === "") return;

  addUserMessage(text);

  chatInput.value = "";

  setTimeout(() => {

    addBotMessage("AI Response: " + text);

  }, 800);

}

// SCROLL ANIMATION
const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0px)";

    }

  });

},{
  threshold:.2
});

document.querySelectorAll(".section, .hero-content, .hero-image").forEach(el => {

  el.style.opacity = 0;
  el.style.transform = "translateY(50px)";
  el.style.transition = "1s";

  observer.observe(el);

});