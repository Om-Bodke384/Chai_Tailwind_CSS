const copyButtons = document.querySelectorAll(".copy-btn");
const classInput = document.getElementById("classInput");
const textInput = document.getElementById("textInput");
const previewBox = document.getElementById("previewBox");

copyButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const targetId = button.getAttribute("data-copy");
    const text = document.getElementById(targetId).innerText;

    navigator.clipboard.writeText(text).then(function () {
      button.textContent = "Copied";

      setTimeout(function () {
        button.textContent = "Copy";
      }, 1200);
    });
  });
});

function applyChaiStyles(element, className) {
  const parts = className.split("-");

  if (parts[1] === "bg") {
    element.style.backgroundColor = parts[2];
  }

  if (parts[1] === "textcol") {
    element.style.color = parts[2];
  }

  if (parts[1] === "p") {
    element.style.padding = parts[2] + "px";
  }

  if (parts[1] === "m") {
    element.style.margin = parts[2] + "px";
  }

  if (parts[1] === "w") {
    element.style.width = parts[2] + "px";
  }

  if (parts[1] === "h") {
    element.style.height = parts[2] + "px";
  }

  if (parts[1] === "fs") {
    element.style.fontSize = parts[2] + "px";
  }

  if (parts[1] === "text") {
    element.style.textAlign = parts[2];
  }

  if (parts[1] === "br") {
    element.style.borderRadius = parts[2] + "px";
  }

  if (className === "chai-flex") {
    element.style.display = "flex";
  }

  if (className === "chai-center") {
    element.style.display = "flex";
    element.style.justifyContent = "center";
    element.style.alignItems = "center";
  }

  if (className === "chai-between") {
    element.style.display = "flex";
    element.style.justifyContent = "space-between";
  }

  if (className === "chai-col") {
    element.style.display = "flex";
    element.style.flexDirection = "column";
  }

  if (className === "chai-grid") {
    element.style.display = "grid";
  }

  if (parts[1] === "cols") {
    element.style.display = "grid";
    element.style.gridTemplateColumns = "repeat(" + parts[2] + ", 1fr)";
  }

  if (parts[1] === "rows") {
    element.style.display = "grid";
    element.style.gridTemplateRows = "repeat(" + parts[2] + ", 1fr)";
  }

  if (parts[1] === "gap") {
    element.style.gap = parts[2] + "px";
  }
}

function updatePreview() {
  previewBox.className = "preview-box";
  previewBox.removeAttribute("style");
  previewBox.textContent = textInput.value || "Preview text";

  const classes = classInput.value.split(" ");

  classes.forEach(function (item) {
    if (item.startsWith("chai-")) {
      applyChaiStyles(previewBox, item);
    }
  });
}

classInput.addEventListener("input", updatePreview);
textInput.addEventListener("input", updatePreview);

updatePreview();
