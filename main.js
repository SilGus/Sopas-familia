const CHECKOUT_URL = "https://puntoycomastore.com/cart/49179879145700:1"; // Reemplazar por URL real de checkout

const checkoutLinks = document.querySelectorAll("[data-checkout]");
const stickyBreakpoint = 420;

checkoutLinks.forEach((link) => {
  link.setAttribute("href", CHECKOUT_URL);
});

const updateStickyCta = () => {
  const shouldShow = window.scrollY > stickyBreakpoint && window.innerWidth < 860;
  document.body.classList.toggle("show-sticky", shouldShow);
  document.body.classList.toggle("has-sticky", window.innerWidth < 860);
};

updateStickyCta();
window.addEventListener("scroll", updateStickyCta, { passive: true });
window.addEventListener("resize", updateStickyCta);

document.querySelectorAll(".faq-item button").forEach((button) => {
  button.addEventListener("click", () => {
    const panelId = button.getAttribute("aria-controls");
    const panel = panelId ? document.getElementById(panelId) : null;
    const isOpen = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", String(!isOpen));
    if (panel) {
      panel.hidden = isOpen;
    }
  });
});
