const copyButtons = document.querySelectorAll("[data-copy]");
const playgroundPreview = document.getElementById("playgroundPreview");
const classInput = document.getElementById("classInput");
const contentInput = document.getElementById("contentInput");
const animatedCards = document.querySelectorAll(".info-card, .install-card, .example-card");

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const target = document.getElementById(button.dataset.copy);
    const text = target?.innerText ?? "";

    try {
      await navigator.clipboard.writeText(text);
      button.textContent = "Copied";
      setTimeout(() => {
        button.textContent = "Copy";
      }, 1400);
    } catch (error) {
      button.textContent = "Failed";
      setTimeout(() => {
        button.textContent = "Copy";
      }, 1400);
    }
  });
});

const applyPlaygroundStyles = () => {
  playgroundPreview.className = "playground-preview";
  playgroundPreview.removeAttribute("style");
  playgroundPreview.textContent = contentInput.value || "Preview";

  const classes = classInput.value.trim().split(/\s+/).filter(Boolean);

  classes.forEach((clas) => {
    if (clas.startsWith("chai-")) {
      applyInlineStyle(playgroundPreview, clas);
    }
  });
};

function applyInlineStyle(element, clas) {
  const eachClass = clas.split("-");

  if (eachClass[1] === "bg") {
    element.style.backgroundColor = eachClass[2];
  }

  if (eachClass[1] === "textcol") {
    element.style.color = eachClass[2];
  }

  if (eachClass[1] === "p") {
    element.style.padding = eachClass[2] + "px";
  }

  if (eachClass[1] === "m") {
    element.style.margin = eachClass[2] + "px";
  }

  if (eachClass[1] === "w") {
    element.style.width = eachClass[2] + "px";
  }

  if (eachClass[1] === "h") {
    element.style.height = eachClass[2] + "px";
  }

  if (eachClass[1] === "fs") {
    element.style.fontSize = eachClass[2] + "px";
  }

  if (eachClass[1] === "text") {
    element.style.textAlign = eachClass[2];
  }

  if (eachClass[1] === "br") {
    element.style.borderRadius = eachClass[2] + "px";
  }

  if (clas === "chai-flex") {
    element.style.display = "flex";
  }

  if (clas === "chai-center") {
    element.style.display = "flex";
    element.style.justifyContent = "center";
    element.style.alignItems = "center";
  }

  if (clas === "chai-between") {
    element.style.display = "flex";
    element.style.justifyContent = "space-between";
  }

  if (clas === "chai-col") {
    element.style.display = "flex";
    element.style.flexDirection = "column";
  }

  if (clas === "chai-grid") {
    element.style.display = "grid";
  }

  if (eachClass[1] === "rows") {
    element.style.display = "grid";
    element.style.gridTemplateRows = "repeat(" + eachClass[2] + ", 1fr)";
  }

  if (eachClass[1] === "cols") {
    element.style.display = "grid";
    element.style.gridTemplateColumns = "repeat(" + eachClass[2] + ", 1fr)";
  }

  if (eachClass[1] === "gap") {
    element.style.gap = eachClass[2] + "px";
  }
}

[classInput, contentInput].forEach((input) => {
  input.addEventListener("input", applyPlaygroundStyles);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

animatedCards.forEach((card) => observer.observe(card));

applyPlaygroundStyles();
