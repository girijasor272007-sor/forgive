const messages = [
  {
    icon: "💌", kicker: "A NOTE", title: "A Little Apology",
    paragraphs: [
      "I'm sorry for hurting your feelings.",
      "I know that sometimes words and actions can affect people more deeply than we realize. I don't want to make excuses for anything. I just want you to know that I genuinely regret it.",
      "You matter to me, and the last thing I would want is to become the reason behind your sadness.",
      "I'm truly sorry."
    ]
  },
  {
    icon: "🌻", kicker: "ABOUT YOU", title: "Your Specialness",
    paragraphs: [
      "I just want you to know that you are someone I genuinely value.",
      "Your presence, your conversations, your little gestures, and the way you make ordinary moments feel special mean more than I can explain.",
      "Some people become important without even realizing how much they mean to someone.",
      "And you are one of those people."
    ]
  },
  {
    icon: "✨", kicker: "THE LITTLE THINGS", title: "Little Memories",
    paragraphs: [
      "Not every beautiful thing needs to be captured in photographs.",
      "Sometimes, it's just a conversation, a random laugh, a silly moment, or even a small exchange of words.",
      "These little things might seem ordinary, but they can become some of the nicest memories.",
      "And I genuinely appreciate those moments."
    ]
  },
  {
    icon: "🫶", kicker: "FROM HERE ON", title: "One Promise",
    paragraphs: [
      "I cannot promise that I'll always be perfect.",
      "But I can promise to make an effort to be more thoughtful, understand your feelings, respect your boundaries, and learn from my mistakes.",
      "Because valuing someone also means being careful with their feelings."
    ]
  },
  {
    icon: "🌙", kicker: "A QUIET THOUGHT", title: "A Quiet Thought",
    paragraphs: [
      "Sometimes, we don't realize the value of someone's presence until we think about how much their little moments mean to us.",
      "Not everyone needs grand gestures or extraordinary words.",
      "Sometimes, a little kindness, understanding, and genuine care are enough to make someone's day beautiful.",
      "And I hope you always receive that."
    ]
  },
  {
    icon: "💗", kicker: "BEFORE YOU GO", title: "One Last Thing",
    paragraphs: [
      "There's just one thing I want you to remember:",
      "I really value you.",
      "I'm sorry for the moments when I failed to show that properly.",
      "You deserve kindness, respect, happiness, and genuine care.",
      "I hope this little corner of the internet brings a smile to your face.",
      "No expectations, no pressure. Just a few honest words from my heart.",
      "Thank you for being you. ♡"
    ]
  }
];

const homeView = document.getElementById("home");
const messageView = document.getElementById("message");
const endingView = document.getElementById("ending");
const titleEl = document.getElementById("messageTitle");
const copyEl = document.getElementById("messageCopy");
const iconEl = document.getElementById("messageIcon");
const kickerEl = document.getElementById("messageKicker");
const countEl = document.getElementById("messageCount");
const progressBar = document.getElementById("progressBar");
const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");
let currentIndex = 0;

function showView(view) {
  [homeView, messageView, endingView].forEach(section => section.classList.remove("active"));
  view.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderMessage(index) {
  currentIndex = index;
  const item = messages[index];
  iconEl.textContent = item.icon;
  kickerEl.textContent = item.kicker;
  titleEl.textContent = item.title;
  countEl.textContent = `${String(index + 1).padStart(2, "0")} — 06`;
  progressBar.style.width = `${((index + 1) / messages.length) * 100}%`;

  copyEl.innerHTML = "";
  item.paragraphs.forEach((paragraph, i) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    p.style.animationDelay = `${Math.min(i * 0.14, 0.75)}s`;
    copyEl.appendChild(p);
  });

  previousButton.style.visibility = index === 0 ? "hidden" : "visible";
  nextButton.innerHTML = index === messages.length - 1
    ? 'Finish this little journey <span>♡</span>'
    : 'Next little note <span>→</span>';
  showView(messageView);
}

document.querySelectorAll(".message-card").forEach(card => {
  card.addEventListener("click", () => renderMessage(Number(card.dataset.section)));
});

document.getElementById("backButton").addEventListener("click", () => showView(homeView));
document.getElementById("brandHome").addEventListener("click", event => {
  event.preventDefault();
  showView(homeView);
});
previousButton.addEventListener("click", () => {
  if (currentIndex > 0) renderMessage(currentIndex - 1);
});
nextButton.addEventListener("click", () => {
  if (currentIndex < messages.length - 1) renderMessage(currentIndex + 1);
  else showView(endingView);
});
document.getElementById("returnButton").addEventListener("click", () => showView(homeView));

/* Gentle floating decorative hearts and stars; no audio or photographs. */
const particleLayer = document.getElementById("particles");
const symbols = ["♡", "✧", "·", "♡", "✦"];
function addParticle() {
  const particle = document.createElement("span");
  particle.className = "particle";
  particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.fontSize = `${10 + Math.random() * 13}px`;
  const duration = 9 + Math.random() * 9;
  particle.style.animationDuration = `${duration}s`;
  particle.style.opacity = `${0.25 + Math.random() * 0.45}`;
  particleLayer.appendChild(particle);
  setTimeout(() => particle.remove(), duration * 1000);
}
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  for (let i = 0; i < 9; i++) setTimeout(addParticle, i * 450);
  setInterval(addParticle, 1450);
}
