(() => {
  const img = n => `assets/img/${n}.jpg`;
  const CATS = ["Documentary", "Commercial", "YouTube", "Mixed"];

  // Links/roles/notes taken from the source PDF.
  const P = [
    { c: "Documentary", t: "Sreemangal Episode", client: "Sonali Life Insurance", img: "sreemangal", url: "https://www.facebook.com/reel/149031031632654", note: "Won Best Content prize — Life Insurance Summit 2024", role: "Script Writer & Video Editor" },
    { c: "Documentary", t: "Fulbaria Episode", client: "Sonali Life Insurance", img: "fulbaria", url: "https://www.facebook.com/reel/1145889779723905", note: "A shorter version was featured on ATN Bangla", role: "Script Writer & Video Editor" },
    { c: "Documentary", t: "Chittagong 14 Election Campaign Documentary Video", img: "chittagong", url: "https://www.facebook.com/reel/2520669858366928", role: "Video Editor" },
    { c: "Documentary", t: "Mymensingh Episode", client: "Sonali Life Insurance", img: "mymensingh", url: "https://www.facebook.com/reel/851317680065516", role: "Script Writer & Video Editor" },

    { c: "Commercial", t: "First Year 101 — Episode 1", client: "Airtel TikTok Campaign", img: "airtel-1", v: 1, url: "https://www.tiktok.com/@cirkle.digital/video/7380768650975808769", note: "3.8 Million views", role: "Video Editor" },
    { c: "Commercial", t: "First Year 101 — Episode 2", client: "Airtel TikTok Campaign", img: "airtel-2", v: 1, url: "https://www.tiktok.com/@cirkle.digital/video/7382538115711323409", note: "6.9 Million views", role: "Video Editor" },
    { c: "Commercial", t: "First Year 101 — Episode 3", client: "Airtel TikTok Campaign", img: "airtel-3", v: 1, url: "https://www.tiktok.com/@cirkle.digital/video/7385156083247009045", note: "8.5 Million views", role: "Video Editor" },
    { c: "Commercial", t: "T20 World Cup Campaign Ad 1", client: "Toffee", img: "toffee-1", role: "Assistant Director & Post Production Supervisor" },
    { c: "Commercial", t: "T20 World Cup Campaign Ad 2", client: "Toffee", img: "toffee-2", url: "https://youtu.be/u9aHXgVssX8", role: "Assistant Director & Post Production Supervisor" },
    { c: "Commercial", t: "T20 World Cup Campaign Ad 3", client: "Toffee", img: "toffee-3", url: "https://youtu.be/jTtAZwrAG80", role: "Assistant Director & Post Production Supervisor" },

    { c: "YouTube", t: "Project Prime Minister: Is Delhi behind Sheikh Hasina's rise?", img: "pm", url: "https://youtu.be/6yEZEdZGHO4", role: "Video Editor" },
    { c: "YouTube", t: "The Rise and Fall of Bangla Bhai", img: "bangla-bhai", url: "https://youtu.be/LNBgRfmzsas", role: "Video Editor" },
    { c: "YouTube", t: "Trans-Asian Railway and Bangladesh", img: "trans-asian", url: "https://youtu.be/2dYQSE4mfxg", role: "Video Editor" },
    { c: "YouTube", t: "The End of Dollar? FINANCE FRONTIER", img: "dollar", url: "https://youtu.be/9f5eI83NuT4", role: "Video Editor" },
    { c: "YouTube", t: "The Epic of Gilgamesh | Faceless Video", img: "gilgamesh", url: "https://youtu.be/EEwfF3ggGTQ", role: "Video Editor" },
    { c: "YouTube", t: "Siliguri Corridor: India's Achilles' Heel?", img: "siliguri", url: "https://youtu.be/U0Cpxvp1j6I", role: "Video Editor" },

    { c: "Mixed", t: "Zenith Auto Promo Video", img: "zenith", url: "https://www.facebook.com/ZenithAuto1/videos/2430903380441130", role: "Video Editor" },
    { c: "Mixed", t: "Sheltech Meliora Aziz Promo Video", img: "sheltech", url: "https://www.facebook.com/share/v/19RXciMc5u/", role: "Video Editor" },
    { c: "Mixed", t: "Personal Project — Drone Operation Practice", img: "drone", url: "https://youtu.be/30OMd6VOSU0", role: "Drone Operator & Video Editor" },
    { c: "Mixed", t: "Showreel for Blue Ocean Digital", img: "showreel", url: "https://drive.google.com/file/d/1Hqz63Cum19ox-rA23098kNfHRlDVI0yN/view", role: "Video Editor" },
  ];

  const esc = s => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const playIcon = '<span class="play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></span>';

  const card = p => {
    const image = `<img src="${img(p.img)}" alt="Thumbnail: ${esc(p.t)}" loading="lazy">`;
    const thumb = p.url
      ? `<a class="thumb" href="${p.url}" target="_blank" rel="noopener" aria-label="Watch ${esc(p.t)}">${image}${playIcon}</a>`
      : `<span class="thumb">${image}</span>`;
    const title = p.url ? `<a href="${p.url}" target="_blank" rel="noopener">${esc(p.t)}</a>` : esc(p.t);
    return `<article class="item${p.v ? " vertical" : ""}">${thumb}<div class="meta">
      ${p.client ? `<span class="client">${esc(p.client)}</span>` : ""}
      <h3>${title}</h3>
      ${p.note ? `<span class="note">${esc(p.note)}</span>` : ""}
      <span class="rolel">Role: <b>${esc(p.role)}</b></span></div></article>`;
  };

  const tabs = document.querySelector(".tabs");
  const grid = document.getElementById("grid");
  let current = CATS[0];

  const show = cat => {
    current = cat;
    tabs.querySelectorAll("button").forEach(b => b.setAttribute("aria-selected", b.dataset.c === cat));
    grid.innerHTML = P.filter(p => p.c === cat).map(card).join("");
  };

  tabs.innerHTML = CATS.map(c => `<button role="tab" data-c="${c}" aria-selected="false">${c}</button>`).join("");
  tabs.addEventListener("click", e => { const b = e.target.closest("button"); if (b) show(b.dataset.c); });
  show(current);

  // nav
  const nav = document.querySelector(".nav"), btn = document.querySelector(".menu-btn"), menu = document.getElementById("menu");
  addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 10), { passive: true });
  btn.addEventListener("click", () => { const o = menu.classList.toggle("open"); btn.setAttribute("aria-expanded", o); });
  menu.addEventListener("click", e => { if (e.target.closest("a")) { menu.classList.remove("open"); btn.setAttribute("aria-expanded", false); } });

  // reveal on scroll
  const io = "IntersectionObserver" in window && new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .08 });
  document.querySelectorAll(".reveal").forEach(el => io ? io.observe(el) : el.classList.add("in"));
  document.getElementById("yr").textContent = new Date().getFullYear();
})();
