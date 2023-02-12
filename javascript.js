const grid = document.querySelector("input");
grid.addEventListener("click", createSketch);
grid.addEventListener("input", () => {
  document.getElementById(
    "sliderValue"
  ).textContent = `${grid.value}X${grid.value}`;
});

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    selectMode(button.id);
  });
});

function createSketch() {
  let i = 0;
  const sketch = document.getElementById("sketch");
  const clear = document.querySelectorAll(".outerPixel");

  clear.forEach(() => {
    sketch.removeChild(clear[i]);
    ++i;
  });

  for (i = 0; i < grid.value; ++i) {
    const pixel = document.createElement("div");

    pixel.classList.add("outerPixel");
    sketch.appendChild(pixel);

    for (let j = 0; j < grid.value; ++j) {
      const outerPixel = document.querySelectorAll(".outerPixel");
      const innerPixel = document.createElement("div");

      innerPixel.classList.add("innerPixel");
      outerPixel[i].appendChild(innerPixel);
    }
  }

  selectMode("black");
}

function getRandomColor() {
  const color = [0, 0, 0];

  color[0] = Math.floor(Math.random() * 255);
  color[1] = Math.floor(Math.random() * 255);
  color[2] = Math.floor(Math.random() * 255);

  return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
}

function selectMode(mode) {
  const pixel = document.querySelectorAll(".innerPixel");

  if (mode === "black") {
    pixel.forEach((div) => {
      div.addEventListener("mouseover", () => {
        div.style.cssText = "background-color: black;";
      });
    });
  } else if (mode === "rainbow") {
    pixel.forEach((div) => {
      div.addEventListener("mouseover", () => {
        div.style.cssText = `background-color: ${getRandomColor()};`;
      });
    });
  } else {
    createSketch();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById(
    "sliderValue"
  ).textContent = `${grid.value}X${grid.value}`;
  createSketch();
});
