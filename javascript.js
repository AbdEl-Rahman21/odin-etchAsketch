document.addEventListener("DOMContentLoaded", () => {
  createSketch();
});

const grid = document.querySelector("input");
grid.addEventListener("click", createSketch);

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
}
