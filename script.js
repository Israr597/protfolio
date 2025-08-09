// Scroll to Top Button
const scrollBtn = document.getElementById('scrollTopBtn');
window.onscroll = function() {
  scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
};

scrollBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
