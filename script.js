
// القائمة الرئيسية للجوال
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
  menuBtn.textContent = nav.classList.contains("active") ? "✕" : "☰";
});

// إغلاق القائمة بعد اختيار القسم
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    menuBtn.textContent = "☰";
  });
});

// إظهار العناصر عند التمرير
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12
});

document.querySelectorAll(".reveal").forEach(element => {
  observer.observe(element);
});

// زر العودة للأعلى
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// تأثير بسيط على الصور
document.querySelectorAll(".gallery-grid img").forEach(image => {
  image.addEventListener("click", () => {
    image.classList.toggle("selected");
  });
});

console.log("TURAB Website is ready!");
