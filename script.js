// Loading

window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 1200);
});

// Cursor

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

// Typing Effect

const typing = document.getElementById("typing");

const texts = [
    "AI Engineer",
    "Frontend Developer",
    "UI / UX Designer",
    "Machine Learning Enthusiast"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    let current = texts[textIndex];

    if(!deleting){
        typing.textContent = current.substring(0, charIndex++);
    }else{
        typing.textContent = current.substring(0, charIndex--);
    }

    let speed = deleting ? 50 : 100;

    if(!deleting && charIndex === current.length + 1){
        speed = 1500;
        deleting = true;
    }

    if(deleting && charIndex === 0){
        deleting = false;
        textIndex = (textIndex + 1) % texts.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

// Scroll Animation

const fadeElements = document.querySelectorAll(".fade-up");

function reveal(){

    fadeElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            el.classList.add("show");
        }

    });

}

window.addEventListener("scroll", reveal);
reveal();

// Mobile Menu

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// Language Toggle

const langToggle = document.getElementById("langToggle");

let currentLang = "en";

langToggle.addEventListener("click", () => {

    const elements = document.querySelectorAll("[data-en]");

    if(currentLang === "en"){

        document.body.classList.add("ar");
        document.documentElement.lang = "ar";

        elements.forEach(el => {
            el.textContent = el.getAttribute("data-ar");
        });

        langToggle.textContent = "EN";
        currentLang = "ar";

    }else{

        document.body.classList.remove("ar");
        document.documentElement.lang = "en";

        elements.forEach(el => {
            el.textContent = el.getAttribute("data-en");
        });

        langToggle.textContent = "AR";
        currentLang = "en";

    }

});

// Active Nav

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if(pageYOffset >= sectionTop - 200){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href").includes(current)){
            link.classList.add("active");
        }

    });

});

// Chatbot

const chatbot = document.getElementById("chatbot");
const chatOpenBtn = document.getElementById("chatOpenBtn");
const closeChat = document.getElementById("closeChat");
const minimizeChat = document.getElementById("minimizeChat");
const chatBody = document.getElementById("chatBody");
const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");

let minimized = false;

chatOpenBtn.addEventListener("click", () => {
    chatbot.style.display = "block";
});

closeChat.addEventListener("click", () => {
    chatbot.style.display = "none";
});

minimizeChat.addEventListener("click", () => {

    minimized = !minimized;

    if(minimized){
        chatBody.style.display = "none";
        document.querySelector(".chat-input-area").style.display = "none";
    }else{
        chatBody.style.display = "block";
        document.querySelector(".chat-input-area").style.display = "flex";
    }

});

function sendMessage(){

    const message = chatInput.value.trim();

    if(message === "") return;

    const userMsg = document.createElement("div");
    userMsg.classList.add("user-message");
    userMsg.textContent = message;

    chatBody.appendChild(userMsg);

    setTimeout(() => {

        const botMsg = document.createElement("div");
        botMsg.classList.add("bot-message");

        botMsg.textContent = "Thanks for your message! Ahmed will contact you soon.";

        chatBody.appendChild(botMsg);

        chatBody.scrollTop = chatBody.scrollHeight;

    }, 700);

    chatInput.value = "";
}

sendBtn.addEventListener("click", sendMessage);

chatInput.addEventListener("keypress", (e) => {

    if(e.key === "Enter"){
        sendMessage();
    }

});
