const sections = document.querySelectorAll(".section");

function callBack(entries, observer) {
  const [intersect] = entries;

  if (intersect.isIntersecting) {
    intersect.target.classList.remove("section--hidden");

    observer.unobserve(intersect.target);
  }
}

const sectionObserver = new IntersectionObserver(callBack, {
  root: null,
  threshold: 0.2,
});

sections.forEach((el) => {
  sectionObserver.observe(el);
  el.classList.add("section--hidden");
});
