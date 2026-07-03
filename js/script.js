// ============================================================
// Contenu — modifie ici si besoin (prénom, lettres, quiz)
// ============================================================
const HER_NAME = "Leslie";

const CHAPTERS = [
  {
    title: "Le début de notre amitié",
    letters: [
      "Dans la genèse de notre amitié particulière, je n'aurais jamais imaginé cette suite. Je passe les détails, je ne t'apprends rien…",
      "Au-delà des apparences, tu es cette personne formidable, incomprise dans le chaos de tes cris et de tes douleurs.",
      "Si je devais encore choisir d'être ton amie, alors mille et une fois ? Je le referais sans aucune hésitation, parce que tu m'as prouvé qu'on peut s'en foutre, être stupide, parler un peu trop de choses assez obscènes, de tout et de rien, mais être juste là, au téléphone, pendant des heures."
    ],
    quiz: {
      question: "Dans la 3ᵉ lettre, si c'était à refaire, combien de fois choisirait-elle d'être ton amie ?",
      options: ["Une seule fois", "Mille et une fois", "Elle ne choisirait pas"],
      answer: 1
    }
  },
  {
    title: "Qui tu es pour moi",
    letters: [
      "« My sweety », comme je t'appelle si affectueusement, tu es ma relation stable même. Merci d'être juste toi avec moi, et j'aime ça…",
      "La « peste » que tu penses être — je pense surtout que ta franchise nous a sauvées tant de fois. Mais si tu pouvais mâcher tes mots à quelques endroits, on s'en porterait beaucoup mieux.",
      "Tu mérites beaucoup d'amour parce que tu en donnes assez, sans même t'en rendre compte. Et pour cela, merci."
    ],
    quiz: {
      question: "Quel surnom affectueux te donne-t-elle dans la 4ᵉ lettre ?",
      options: ["Ma chérie", "My sweety", "Ma puce"],
      answer: 1
    }
  },
  {
    title: "Au-delà des apparences",
    letters: [
      "Tu me disais être en retard, sentir que tu as traîné niveau scolaire. Mais comme je te l'ai dit, Dieu a prévu une nouvelle saison pour toi.",
      "Les apparences sont si trompeuses : tu as l'air d'une peste au premier abord, alors que tu pleures vite. La vie, hein, elle est là.",
      "J'ai une petite pensée pour les parents qui continuent de te soutenir d'une manière ou d'une autre. Qu'ils sachent que même si tu vas où tu veux, ils n'ont pas jeté leur argent à terre."
    ],
    quiz: {
      question: "Selon la 7ᵉ lettre, qu'est-ce que Dieu a prévu pour toi ?",
      options: ["Une nouvelle saison", "Un nouveau travail", "Un nouveau pays"],
      answer: 0
    }
  },
  {
    title: "Ma sœur, mon binôme",
    letters: [
      "J'ai envie de te dire que je te déteste de ne pas croire en toi, de ne pas te sentir capable de beaucoup de choses. Être indécise, ça te ralentit.",
      "Continue d'être cette personne un peu folle quand on se rassemble tous, qui ne cherche qu'à s'amuser à tout bout de champ.",
      "21 lettres pour ma sœur autiste, qui a un nombre infini de pointeurs comme moi, mais qui a peur d'en choisir un parce qu'ils font n'importe quoi par la suite. On cherche à se marier ensemble, nous deux, ou bien ?"
    ],
    quiz: {
      question: "Dans la 12ᵉ lettre, à quoi vous compare-t-elle toutes les deux ?",
      options: ["À un nombre infini de pointeurs", "À une boucle sans fin", "À un tableau vide"],
      answer: 0
    }
  },
  {
    title: "Ce que je te souhaite",
    letters: [
      "J'ai reçu des cadeaux cette année, à mon anniversaire aussi. Mais le tien m'a profondément marquée, à un point que tu ne peux même pas imaginer. Tu m'as épatée.",
      "Ce que je souhaite ? Que Dieu, dans son infinie bonté, continue de te restaurer et de te guérir des douleurs que tu traînes depuis toutes ces années.",
      "Laisse quelqu'un t'aimer, ma chérie (nous ne sommes pas jumelles) : tu deviens vieille, au cas où tu l'oublierais. Choisis."
    ],
    quiz: {
      question: "Que te souhaite-t-elle dans la 14ᵉ lettre ?",
      options: ["D'être restaurée et guérie", "De devenir riche", "De voyager loin"],
      answer: 0
    }
  },
  {
    title: "Nos souvenirs",
    letters: [
      "Je veux que tu saches que je me suis assise pour écrire ça, malgré que je ne sois pas dans les émotions. Profites-en, parce que tu n'auras plus de lettres de ma part.",
      "Si l'on me donnait un instant pour faire des dédicaces durant ma remise, je te lirais quelques pages, parce que j'ai tellement à dire… Que ce soit les matins très tôt quand je sortais pour l'école, ou quand je rentrais hyper tard : tu étais là. Eh, mon cœur, hein ?",
      "Chaque lettre écrite ici a été patiemment pensée pour toi, dans le but ultime de te faire te souvenir de la personne extraordinaire que tu es, et de nos moments marquants, toutes les deux."
    ],
    quiz: {
      question: "Pourquoi a-t-elle quand même écrit la 16ᵉ lettre ?",
      options: ["Elle n'était pas d'humeur mais l'a fait pour toi", "On l'y a obligée", "Par simple habitude"],
      answer: 0
    }
  },
  {
    title: "Joyeux anniversaire",
    letters: [
      "Les années passent si vite. Alors rendez-vous à ta fin d'année de licence, on est ensemble, famille… Je te souhaite force et réussite pour la suite. Arme-toi de courage.",
      "Alors, aujourd'hui, je veux bénir le nom du Dieu que je prie pour ta vie. Joyeux anniversaire ma sœur, je t'aime sans vice.",
      "Nouvelle bougie, nouveau chapitre. Continue de sourire — avec Dieu, on peut vaincre la tristesse et écrire notre histoire."
    ],
    quiz: {
      question: "Que dit-elle juste avant « joyeux anniversaire » dans la 20ᵉ lettre ?",
      options: ["Je veux bénir le nom de Dieu que je prie pour ta vie", "Je veux organiser une fête", "Je veux t'offrir un cadeau"],
      answer: 0
    }
  }
];

const TOTAL_CHAPTERS = CHAPTERS.length;
const STORAGE_KEY = "leslie21_progress";

// ============================================================
// État & persistance
// ============================================================
function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { unlocked: 0 };
    const parsed = JSON.parse(raw);
    if (typeof parsed.unlocked === "number") return parsed;
  } catch (e) {}
  return { unlocked: 0 };
}
function saveProgress(state) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
}

let state = loadProgress();

// ============================================================
// Navigation entre écrans
// ============================================================
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// ============================================================
// Album souvenir (7 pastilles)
// ============================================================
function renderAlbum() {
  const album = document.getElementById("album");
  album.innerHTML = "";
  for (let i = 0; i < TOTAL_CHAPTERS; i++) {
    const slot = document.createElement("div");
    slot.className = "album-slot" + (i < state.unlocked ? " unlocked" : "");
    if (i < state.unlocked) {
      slot.appendChild(makePhotoEl(i));
      slot.title = "Souvenir n°" + (i + 1);
    } else {
      slot.textContent = "🔒";
    }
    album.appendChild(slot);
  }
  const fill = document.getElementById("progressFill");
  fill.style.width = Math.round((state.unlocked / TOTAL_CHAPTERS) * 100) + "%";
}

function makePhotoEl(index) {
  const img = document.createElement("img");
  img.src = "assets/photos/photo" + (index + 1) + ".jpg";
  img.alt = "Souvenir " + (index + 1);
  img.onerror = function () {
    const wrap = document.createElement("div");
    wrap.className = "photo-missing";
    wrap.innerHTML = '<span class="icon">🖼️</span><span>photo' + (index + 1) + '.jpg</span>';
    img.replaceWith(wrap);
  };
  return img;
}

// ============================================================
// Rendu des chapitres
// ============================================================
function renderJourney() {
  renderAlbum();
  const container = document.getElementById("chapterContainer");
  container.innerHTML = "";

  const chaptersToShow = Math.min(state.unlocked + 1, TOTAL_CHAPTERS);

  for (let i = 0; i < chaptersToShow; i++) {
    container.appendChild(renderChapter(i));
  }

  if (state.unlocked >= TOTAL_CHAPTERS) {
    setTimeout(goToFinale, 900);
  }
}

function renderChapter(index) {
  const data = CHAPTERS[index];
  const isSolved = index < state.unlocked;

  const chapter = document.createElement("div");
  chapter.className = "chapter";

  const idx = document.createElement("p");
  idx.className = "chapter-index";
  idx.textContent = "Chapitre " + (index + 1) + " / " + TOTAL_CHAPTERS;
  chapter.appendChild(idx);

  const heading = document.createElement("h3");
  heading.className = "chapter-heading";
  heading.textContent = data.title;
  chapter.appendChild(heading);

  data.letters.forEach((text, li) => {
    const card = document.createElement("div");
    const globalNum = index * 3 + li + 1;
    const isFinal = globalNum === 21;
    card.className = "letter-card" + (isFinal ? " final-card" : "");
    const num = document.createElement("p");
    num.className = "letter-number";
    num.textContent = "Lettre " + globalNum + " / 21";
    const p = document.createElement("p");
    p.className = "letter-text" + (isFinal ? " final-letter" : "");
    p.textContent = text;
    card.appendChild(num);
    card.appendChild(p);
    chapter.appendChild(card);
  });

  if (isSolved) {
    chapter.appendChild(renderUnlockedReveal(index));
  } else {
    chapter.appendChild(renderQuiz(index));
  }

  return chapter;
}

function renderUnlockedReveal(index) {
  const wrap = document.createElement("div");
  wrap.className = "unlock-reveal";

  const frame = document.createElement("div");
  frame.className = "unlock-photo-frame";
  frame.appendChild(makePhotoEl(index));
  wrap.appendChild(frame);

  const caption = document.createElement("p");
  caption.className = "unlock-caption";
  caption.textContent = "Souvenir n°" + (index + 1) + " débloqué ✨";
  wrap.appendChild(caption);

  const isLast = index === TOTAL_CHAPTERS - 1;
  if (!isLast && index === state.unlocked - 1) {
    const btn = document.createElement("button");
    btn.className = "btn-continue";
    btn.textContent = "Continuer la lecture →";
    btn.onclick = () => {
      const chapters = document.querySelectorAll(".chapter");
      if (chapters[index + 1]) {
        chapters[index + 1].scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    wrap.appendChild(btn);
  }

  return wrap;
}

function renderQuiz(index) {
  const data = CHAPTERS[index].quiz;
  const card = document.createElement("div");
  card.className = "quiz-card";

  const label = document.createElement("p");
  label.className = "quiz-label";
  label.textContent = "Petit quiz pour débloquer le souvenir n°" + (index + 1);
  card.appendChild(label);

  const question = document.createElement("p");
  question.className = "quiz-question";
  question.textContent = data.question;
  card.appendChild(question);

  const optionsWrap = document.createElement("div");
  optionsWrap.className = "quiz-options";
  let selectedIndex = null;
  const optionButtons = [];

  data.options.forEach((opt, oi) => {
    const btn = document.createElement("button");
    btn.className = "quiz-option";
    btn.textContent = opt;
    btn.onclick = () => {
      if (btn.disabled) return;
      optionButtons.forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      selectedIndex = oi;
      validateBtn.disabled = false;
    };
    optionButtons.push(btn);
    optionsWrap.appendChild(btn);
  });
  card.appendChild(optionsWrap);

  const feedback = document.createElement("p");
  feedback.className = "quiz-feedback";
  card.appendChild(feedback);

  const validateBtn = document.createElement("button");
  validateBtn.className = "btn-quiz";
  validateBtn.textContent = "Valider";
  validateBtn.disabled = true;
  validateBtn.onclick = () => {
    if (selectedIndex === null) return;
    if (selectedIndex === data.answer) {
      optionButtons[selectedIndex].classList.add("correct");
      optionButtons.forEach(b => b.disabled = true);
      validateBtn.disabled = true;
      feedback.textContent = "Bonne réponse ! Un souvenir se débloque… 🔓";
      feedback.className = "quiz-feedback ok";
      state.unlocked = Math.max(state.unlocked, index + 1);
      saveProgress(state);
      setTimeout(renderJourney, 700);
    } else {
      optionButtons[selectedIndex].classList.add("wrong");
      feedback.textContent = "Pas tout à fait… relis la lettre et réessaie 💭";
      feedback.className = "quiz-feedback ko";
      setTimeout(() => optionButtons[selectedIndex].classList.remove("wrong"), 450);
    }
  };
  card.appendChild(validateBtn);

  return card;
}

// ============================================================
// Finale
// ============================================================
function goToFinale() {
  showScreen("finale");
  const gallery = document.getElementById("finalGallery");
  gallery.innerHTML = "";
  for (let i = 0; i < TOTAL_CHAPTERS; i++) {
    const item = document.createElement("div");
    item.className = "gallery-item";
    item.appendChild(makePhotoEl(i));
    gallery.appendChild(item);
  }
  launchConfetti();
}

// ============================================================
// Démarrage / reset
// ============================================================
document.getElementById("startBtn").addEventListener("click", () => {
  showScreen("journey");
  renderJourney();
  tryPlayMusic();
  requestAnimationFrame(() => {
    const firstChapter = document.querySelector(".chapter");
    if (firstChapter) firstChapter.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.getElementById("resetBtn").addEventListener("click", () => {
  state = { unlocked: 0 };
  saveProgress(state);
  showScreen("cover");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ============================================================
// Musique de fond (lecteur YouTube officiel, caché, en boucle)
// ============================================================
const YT_VIDEO_ID = "EYcinRS-9wc";
const soundToggle = document.getElementById("soundToggle");

let ytPlayer = null;
let ytReady = false;
let pendingPlay = false;

window.onYouTubeIframeAPIReady = function () {
  ytPlayer = new YT.Player("yt-player", {
    height: "2",
    width: "2",
    videoId: YT_VIDEO_ID,
    playerVars: {
      autoplay: 0,
      controls: 0,
      disablekb: 1,
      loop: 1,
      playlist: YT_VIDEO_ID,
      playsinline: 1,
      modestbranding: 1,
      fs: 0
    },
    events: {
      onReady: () => {
        ytReady = true;
        ytPlayer.setVolume(60);
        if (pendingPlay) {
          pendingPlay = false;
          ytPlayer.playVideo();
        }
      },
      onStateChange: (e) => {
        if (e.data === YT.PlayerState.ENDED) {
          ytPlayer.seekTo(0);
          ytPlayer.playVideo();
        } else if (e.data === YT.PlayerState.PLAYING) {
          soundToggle.textContent = "🔊";
        } else if (e.data === YT.PlayerState.PAUSED) {
          soundToggle.textContent = "🔈";
        }
      },
      onError: () => {
        soundToggle.textContent = "🔈";
      }
    }
  });
};

function tryPlayMusic() {
  if (ytReady && ytPlayer) {
    ytPlayer.playVideo();
  } else {
    pendingPlay = true;
  }
}

soundToggle.addEventListener("click", () => {
  if (!ytReady || !ytPlayer) {
    pendingPlay = true;
    return;
  }
  const state = ytPlayer.getPlayerState();
  if (state === YT.PlayerState.PLAYING) {
    ytPlayer.pauseVideo();
  } else {
    ytPlayer.playVideo();
  }
});

// ============================================================
// Particules flottantes (petits cœurs)
// ============================================================
const particleContainer = document.getElementById("particles");
const PARTICLE_CHARS = ["💗", "💕", "✨", "🩷"];
function spawnParticle() {
  const el = document.createElement("span");
  el.className = "heart-particle";
  el.textContent = PARTICLE_CHARS[Math.floor(Math.random() * PARTICLE_CHARS.length)];
  const left = Math.random() * 100;
  const duration = 8 + Math.random() * 6;
  const drift = (Math.random() * 80 - 40) + "px";
  el.style.left = left + "vw";
  el.style.setProperty("--drift", drift);
  el.style.animationDuration = duration + "s";
  particleContainer.appendChild(el);
  setTimeout(() => el.remove(), duration * 1000);
}
setInterval(spawnParticle, 1200);
for (let i = 0; i < 4; i++) setTimeout(spawnParticle, i * 300);

// ============================================================
// Curseur lumineux (desktop uniquement)
// ============================================================
if (window.matchMedia && window.matchMedia("(pointer: fine)").matches) {
  document.body.classList.add("has-glow-cursor");
  const glow = document.getElementById("cursor-glow");
  let mx = 0, my = 0, gx = 0, gy = 0;
  window.addEventListener("mousemove", (e) => { mx = e.clientX; my = e.clientY; });
  function animateCursor() {
    gx += (mx - gx) * 0.2;
    gy += (my - gy) * 0.2;
    glow.style.transform = "translate(" + gx + "px, " + gy + "px) translate(-50%, -50%)";
    requestAnimationFrame(animateCursor);
  }
  animateCursor();
}

// ============================================================
// Confettis (canvas)
// ============================================================
function launchConfetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ["#d9506f", "#e3ab4f", "#ffc9d9", "#b8385a", "#fff8f2"];
  const pieces = Array.from({ length: 140 }, () => ({
    x: Math.random() * canvas.width,
    y: -20 - Math.random() * canvas.height,
    w: 6 + Math.random() * 6,
    h: 8 + Math.random() * 10,
    color: colors[Math.floor(Math.random() * colors.length)],
    speed: 2 + Math.random() * 3,
    drift: Math.random() * 2 - 1,
    rotation: Math.random() * 360,
    spin: Math.random() * 6 - 3
  }));

  let frames = 0;
  const maxFrames = 480;

  function frame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      p.y += p.speed;
      p.x += p.drift;
      p.rotation += p.spin;
      if (p.y > canvas.height + 20) {
        p.y = -20;
        p.x = Math.random() * canvas.width;
      }
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    frames++;
    if (frames < maxFrames) {
      requestAnimationFrame(frame);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
  frame();
}

window.addEventListener("resize", () => {
  const canvas = document.getElementById("confetti");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// ============================================================
// Initialisation
// ============================================================
(function init() {
  if (state.unlocked >= TOTAL_CHAPTERS) {
    renderAlbum();
    goToFinale();
  } else if (state.unlocked > 0) {
    showScreen("journey");
    renderJourney();
  } else {
    showScreen("cover");
  }
})();
