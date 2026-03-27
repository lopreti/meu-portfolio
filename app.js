window.addEventListener("scroll", () => {
  const pct =
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
    100;
  document.getElementById("progress").style.width = pct + "%";
});

const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  },
  { threshold: 0.08 },
);
document.querySelectorAll(".fade-in").forEach((el) => obs.observe(el));


function sparkle() {
  const s = document.createElement("div");
  s.className = "sparkle";
  const size = Math.random() * 5 + 3;
  s.style.cssText = `width:${size}px;height:${size}px;left:${Math.random() * 100}vw;top:${Math.random() * 100}vh;opacity:0;`;
  const colors = ["#6366f1", "#ec4899", "#f59e0b", "#a78bfa"];
  s.style.background = colors[Math.floor(Math.random() * colors.length)];
  document.body.appendChild(s);
  s.animate(
    [
      { opacity: 0, transform: "scale(0) rotate(0deg)" },
      { opacity: 0.8, transform: "scale(1) rotate(180deg)" },
      { opacity: 0, transform: "scale(0) rotate(360deg)" },
    ],
    { duration: 2200, easing: "ease-out" },
  ).onfinish = () => s.remove();
}
setInterval(sparkle, 2800);
