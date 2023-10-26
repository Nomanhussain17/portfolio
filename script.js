function skill1() {
  var element = document.getElementById("hide-skill");
  var element1 = document.getElementById("hide-education");
  var element2 = document.getElementById("hide-experience");

  if (element.style.display === "block") {
  } else {
    element.style.display = "block";
    element1.style.display = "none";
    element2.style.display = "none";
  }

  if (document.getElementById("skill-colour").style.color === "gold") {
  } else {
    document.getElementById("skill-colour").style.color = "gold";
    document.getElementById("education-colour").style.color = "white";
    document.getElementById("experience-colour").style.color = "white";
  }
}

function education1() {
  var element1 = document.getElementById("hide-education");
  var element = document.getElementById("hide-skill");
  var element2 = document.getElementById("hide-experience");

  if (element1.style.display === "block") {
  } else {
    element1.style.display = "block";
    element.style.display = "none";
    element2.style.display = "none";
  }

  if (document.getElementById("education-colour").style.color === "gold") {
  } else {
    document.getElementById("education-colour").style.color = "gold";
    document.getElementById("skill-colour").style.color = "white";
    document.getElementById("experience-colour").style.color = "white";
  }
}

function experience1() {
  var element2 = document.getElementById("hide-experience");
  var element1 = document.getElementById("hide-education");
  var element = document.getElementById("hide-skill");

  if (element2.style.display === "block") {
  } else {
    element2.style.display = "block";
    element.style.display = "none";
    element1.style.display = "none";
  }

  if (document.getElementById("experience-colour").style.color === "gold") {
  } else {
    document.getElementById("experience-colour").style.color = "gold";
    document.getElementById("skill-colour").style.color = "white";
    document.getElementById("education-colour").style.color = "white";
  }
}

function clickhome() {
  if (document.getElementById("hover-home").style.color == "gold") {
    document.getElementById("hover-home").style.color = "white";
  } else {
    document.getElementById("hover-home").style.color = "gold";
    document.getElementById("hover-about").style.color = "white";
    document.getElementById("hover-services").style.color = "white";
    document.getElementById("hover-portfolio").style.color = "white";
    document.getElementById("hover-contact").style.color = "white";
  }
}

function clickabout() {
  if (document.getElementById("hover-about").style.color == "gold") {
    document.getElementById("hover-about").style.color = "white";
  } else {
    document.getElementById("hover-about").style.color = "gold";
    document.getElementById("hover-home").style.color = "white";
    document.getElementById("hover-services").style.color = "white";
    document.getElementById("hover-portfolio").style.color = "white";
    document.getElementById("hover-contact").style.color = "white";
  }
}
function clickservices() {
  if (document.getElementById("hover-services").style.color == "gold") {
    document.getElementById("hover-services").style.color = "white";
  } else {
    document.getElementById("hover-services").style.color = "gold";
    document.getElementById("hover-about").style.color = "white";
    document.getElementById("hover-home").style.color = "white";
    document.getElementById("hover-portfolio").style.color = "white";
    document.getElementById("hover-contact").style.color = "white";
  }
}
function clickportfolio() {
  if (document.getElementById("hover-portfolio").style.color == "gold") {
    document.getElementById("hover-portfolio").style.color = "white";
  } else {
    document.getElementById("hover-portfolio").style.color = "gold";
    document.getElementById("hover-home").style.color = "white";
    document.getElementById("hover-about").style.color = "white";
    document.getElementById("hover-services").style.color = "white";
    document.getElementById("hover-contact").style.color = "white";
  }
}
function clickcontact() {
  if (document.getElementById("hover-contact").style.color == "gold") {
    document.getElementById("hover-contact").style.color = "white";
  } else {
    document.getElementById("hover-contact").style.color = "gold";
    document.getElementById("hover-home").style.color = "white";
    document.getElementById("hover-services").style.color = "white";
    document.getElementById("hover-portfolio").style.color = "white";
    document.getElementById("hover-about").style.color = "white";
  }
}

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (document.documentElement.scrollTop <= 600) {
    document.getElementById("hover-home").style.color = "gold";
  } else {
    document.getElementById("hover-home").style.color = "white";
  }

  if (
    document.documentElement.scrollTop > 600 &&
    document.documentElement.scrollTop < 1280
  ) {
    document.getElementById("hover-about").style.color = "gold";
  } else {
    document.getElementById("hover-about").style.color = "white";
  }

  if (
    document.documentElement.scrollTop > 1280 &&
    document.documentElement.scrollTop < 1650
  ) {
    document.getElementById("hover-services").style.color = "gold";
  } else {
    document.getElementById("hover-services").style.color = "white";
  }

  if (
    document.documentElement.scrollTop > 1650 &&
    document.documentElement.scrollTop < 2150
  ) {
    document.getElementById("hover-portfolio").style.color = "gold";
  } else {
    document.getElementById("hover-portfolio").style.color = "white";
  }

  if (document.documentElement.scrollTop > 2150) {
    document.getElementById("hover-contact").style.color = "gold";
  } else {
    document.getElementById("hover-contact").style.color = "white";
  }
}

// // Define an array of messages to loop through
// const messages = [
//    " Frontend Developer.",
//    " Backend Developer.",
//    " Full Stack Developer."
// ];

// // Get the text element
// const textElement = document.getElementById("text");

// // Initialize the index of the current message
// let messageIndex = 0;

// // Initialize the index of the current letter
// let letterIndex = 0;

// // Initialize the direction of the text animation
// let direction = 1;

// // Set the interval for changing the text
// const interval = setInterval(() => {
//    // Get the current message and letter
//    const message = messages[messageIndex];
//    const letter = message[letterIndex];

//    // Update the text element with the current letter
//    textElement.textContent = message.substring(0, letterIndex + 1);

//    // Increment or decrement the letter index based on the direction
//    if (direction === 1) {
//       letterIndex++;
//    } else {
//       letterIndex--;
//    }

//    // If we've reached the end of the message, switch to the next message
//    if (letterIndex === message.length) {
//       direction = -1;
//       setTimeout(() => {
//          direction = 1;
//          messageIndex = (messageIndex + 1) % messages.length;
//       }, 2000);
//    }

//    // If we've reached the beginning of the message, switch to the previous message
//    if (letterIndex === -1) {
//       direction = 1;
//       messageIndex--;
//       if (messageIndex === -1) {
//          messageIndex = messages.length - 1;
//       }
//    }
// }, 100);

ScrollReveal({
  reset: true,
  distance: "100px",
  duration: 1500,
  delay: 100,
});

ScrollReveal().reveal(".subdiv1, .subdiv2, #symbol", { origin: "top" });
ScrollReveal().reveal("nav", { origin: "left" });
ScrollReveal().reveal(".about", { origin: "left" });
ScrollReveal().reveal(".services", { origin: "top" });
ScrollReveal().reveal(".portfolio", { origin: "left" });
ScrollReveal().reveal(".contact", { origin: "top" });

const typed = new Typed(".text", {
  strings: [
    "Fullstack Developer.",
    "AOS and Parallax Website Developer.",
    "(SPA) Single Page Website Developer.",
  ],
  typeSpeed: 50,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});

const typed2 = new Typed(".text2", {
  strings: [
    "Welcome to my portfolio—a world where captivating web experiences come to life. With a passion for creating visually stunning and functional websites, I transform ideas into digital masterpieces. From sleek interfaces to dynamic applications, I craft online experiences that leave a lasting impact. Let's collaborate and make your web presence shine.",
  ],
  typeSpeed: 10,
  // backSpeed: 70,
  // backDelay: 1000,
  // loop: true
});

// document.getElementById("symbol").innerHTML='</>';
